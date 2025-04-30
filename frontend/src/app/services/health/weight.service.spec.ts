import { TestBed } from '@angular/core/testing';
import { WeightService, WeightEntry, StatusResponse } from './weight.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

describe('WeightService', () => {
  let service: WeightService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WeightService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(WeightService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verify no outstanding requests after each test
    httpTesting.verify();
  });

  it('should fetch weight entries (GET)', async () => {
    const mockEntries: WeightEntry[] = [
      { date: '2025-04-29', weight: 70 },
      { date: '2025-04-30', weight: 71 },
    ];

    const entriesPromise = firstValueFrom(service.getWeightEntries());

    const req = httpTesting.expectOne({
      method: 'GET',
      url: 'http://localhost:8000/api/health/weight.php',
    });

    expect(req.request.method).toBe('GET');

    req.flush(mockEntries);

    expect(await entriesPromise).toEqual(mockEntries);
  });

  it('should post weight entries (POST)', async () => {
    const weightEntries: WeightEntry[] = [
      { date: '2025-04-30', weight: 72 },
    ];

    const mockResponse: StatusResponse = { status: 'success' };

    const responsePromise = firstValueFrom(service.postWeightEntries(weightEntries));

    const req = httpTesting.expectOne({
      method: 'POST',
      url: 'http://localhost:8000/api/health/weight.php',
    });

    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(weightEntries);

    req.flush(mockResponse);

    expect(await responsePromise).toEqual(mockResponse);
  });
});
