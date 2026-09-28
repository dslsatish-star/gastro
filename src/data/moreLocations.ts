import { AppLocation } from '../types';

export const comprehensiveLocations: AppLocation[] = [
  // ==========================================
  // 1. STATES
  // ==========================================
  {
    id: 'ap',
    state: 'Andhra Pradesh',
    district: '',
    exactSourceName: 'Andhra Pradesh',
    slug: 'andhra-pradesh',
    path: '/andhra-pradesh',
    level: 'state',
    childIds: [
      'ap-alluri-sitharama-raju', 'ap-anakapalli', 'ap-ananthapuramu', 'ap-annamayya',
      'ap-bapatla', 'ap-chittoor', 'ap-konaseema', 'ap-east-godavari', 'ap-eluru',
      'ap-guntur', 'ap-kakinada', 'ap-krishna', 'ap-kurnool', 'ap-nandyal', 'ap-ntr',
      'ap-palnadu', 'ap-parvathipuram-manyam', 'ap-prakasam', 'ap-spsr-nellore',
      'ap-sri-sathya-sai', 'ap-srikakulam', 'ap-tirupati', 'ap-visakhapatnam',
      'ap-vizianagaram', 'ap-west-godavari', 'ap-ysr-kadapa'
    ],
    serviceAvailability: 'Daily telephone & scheduled in-person consultations',
    canonicalUrl: '/locations/andhra-pradesh',
    indexability: true
  },
  {
    id: 'tg',
    state: 'Telangana',
    district: '',
    exactSourceName: 'Telangana',
    slug: 'telangana',
    path: '/telangana',
    level: 'state',
    childIds: [
      'tg-adilabad', 'tg-bhadradri-kothagudem', 'tg-hanamkonda', 'tg-hyderabad',
      'tg-jagtial', 'tg-jangaon', 'tg-jayashankar-bhupalpally', 'tg-jogulamba-gadwal',
      'tg-kamareddy', 'tg-karimnagar', 'tg-khammam', 'tg-kumuram-bheem-asifabad',
      'tg-mahabubabad', 'tg-mahabubnagar', 'tg-mancherial', 'tg-medak',
      'tg-medchal-malkajgiri', 'tg-mulugu', 'tg-nagarkurnool', 'tg-nalgonda',
      'tg-narayanpet', 'tg-nirmal', 'tg-nizamabad', 'tg-peddapalli',
      'tg-rajanna-sircilla', 'tg-rangareddy', 'tg-sangareddy', 'tg-siddipet',
      'tg-suryapet', 'tg-vikarabad', 'tg-wanaparthy', 'tg-warangal',
      'tg-yadadri-bhuvanagiri'
    ],
    serviceAvailability: 'Daily telephone consultations across all 33 districts',
    canonicalUrl: '/locations/telangana',
    indexability: true
  }
];
