import { AppLocation } from '../types';
import { rawHierarchicalLocations } from './rawHierarchicalLocations';

export const locationsData: AppLocation[] = [
  // ==========================================
  // STATES
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
  },

  // ==========================================
  // ANDHRA PRADESH — ALL 26 DISTRICTS
  // ==========================================
  {
    id: 'ap-kurnool',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    exactSourceName: 'Kurnool',
    slug: 'kurnool',
    path: '/andhra-pradesh/kurnool',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-kurnool-kurnool-urban', 'ap-kurnool-adoni', 'ap-kurnool-yemmiganur', 'ap-kurnool-dhone', 'ap-kurnool-pattikonda'],
    serviceAvailability: 'Primary base location — in-person & phone consultations',
    canonicalUrl: '/locations/andhra-pradesh/kurnool',
    indexability: true
  },
  {
    id: 'ap-nandyal',
    state: 'Andhra Pradesh',
    district: 'Nandyal',
    exactSourceName: 'Nandyal',
    slug: 'nandyal',
    path: '/andhra-pradesh/nandyal',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-nandyal-nandyal-urban', 'ap-nandyal-allagadda', 'ap-nandyal-banaganapalle'],
    serviceAvailability: 'Daily phone consultation & prior appointment visits',
    canonicalUrl: '/locations/andhra-pradesh/nandyal',
    indexability: true
  },
  {
    id: 'ap-ananthapuramu',
    state: 'Andhra Pradesh',
    district: 'Ananthapuramu',
    exactSourceName: 'Ananthapuramu',
    slug: 'ananthapuramu',
    path: '/andhra-pradesh/ananthapuramu',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-ananthapuramu-urban', 'ap-ananthapuramu-guntakal', 'ap-ananthapuramu-tadipatri'],
    serviceAvailability: 'Daily phone consultations & horoscope evaluation',
    canonicalUrl: '/locations/andhra-pradesh/ananthapuramu',
    indexability: true
  },
  {
    id: 'ap-sri-sathya-sai',
    state: 'Andhra Pradesh',
    district: 'Sri Sathya Sai',
    exactSourceName: 'Sri Sathya Sai',
    slug: 'sri-sathya-sai',
    path: '/andhra-pradesh/sri-sathya-sai',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-sri-sathya-sai-puttaparthi', 'ap-sri-sathya-sai-hindupur', 'ap-sri-sathya-sai-dharmavaram', 'ap-sri-sathya-sai-kadiri'],
    serviceAvailability: 'Direct phone consultations for Telugu families',
    canonicalUrl: '/locations/andhra-pradesh/sri-sathya-sai',
    indexability: true
  },
  {
    id: 'ap-ysr-kadapa',
    state: 'Andhra Pradesh',
    district: 'YSR Kadapa',
    exactSourceName: 'YSR Kadapa',
    slug: 'ysr-kadapa',
    path: '/andhra-pradesh/ysr-kadapa',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-ysr-kadapa-urban', 'ap-ysr-kadapa-proddatur', 'ap-ysr-kadapa-pulivendula'],
    serviceAvailability: 'Daily phone consultation & Muhurtham analysis',
    canonicalUrl: '/locations/andhra-pradesh/ysr-kadapa',
    indexability: true
  },
  {
    id: 'ap-annamayya',
    state: 'Andhra Pradesh',
    district: 'Annamayya',
    exactSourceName: 'Annamayya',
    slug: 'annamayya',
    path: '/andhra-pradesh/annamayya',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-annamayya-rayachoti', 'ap-annamayya-madanapalle'],
    serviceAvailability: 'Phone consultation & Janma Kundali reviews',
    canonicalUrl: '/locations/andhra-pradesh/annamayya',
    indexability: true
  },
  {
    id: 'ap-chittoor',
    state: 'Andhra Pradesh',
    district: 'Chittoor',
    exactSourceName: 'Chittoor',
    slug: 'chittoor',
    path: '/andhra-pradesh/chittoor',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-chittoor-urban', 'ap-chittoor-nagari', 'ap-chittoor-palamaner'],
    serviceAvailability: 'Phone consultations for Telugu & Tamil bilingual families',
    canonicalUrl: '/locations/andhra-pradesh/chittoor',
    indexability: true
  },
  {
    id: 'ap-tirupati',
    state: 'Andhra Pradesh',
    district: 'Tirupati',
    exactSourceName: 'Tirupati',
    slug: 'tirupati',
    path: '/andhra-pradesh/tirupati',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-tirupati-urban', 'ap-tirupati-chandragiri', 'ap-tirupati-srikalahasti'],
    serviceAvailability: 'Phone consultations & spiritual astrology guidance',
    canonicalUrl: '/locations/andhra-pradesh/tirupati',
    indexability: true
  },
  {
    id: 'ap-spsr-nellore',
    state: 'Andhra Pradesh',
    district: 'Sri Potti Sriramulu Nellore',
    exactSourceName: 'Sri Potti Sriramulu Nellore',
    slug: 'spsr-nellore',
    path: '/andhra-pradesh/spsr-nellore',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-spsr-nellore-urban', 'ap-spsr-nellore-kavali'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/spsr-nellore',
    indexability: true
  },
  {
    id: 'ap-prakasam',
    state: 'Andhra Pradesh',
    district: 'Prakasam',
    exactSourceName: 'Prakasam',
    slug: 'prakasam',
    path: '/andhra-pradesh/prakasam',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-prakasam-ongole', 'ap-prakasam-chirala'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/prakasam',
    indexability: true
  },
  {
    id: 'ap-bapatla',
    state: 'Andhra Pradesh',
    district: 'Bapatla',
    exactSourceName: 'Bapatla',
    slug: 'bapatla',
    path: '/andhra-pradesh/bapatla',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-bapatla-urban'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/bapatla',
    indexability: true
  },
  {
    id: 'ap-palnadu',
    state: 'Andhra Pradesh',
    district: 'Palnadu',
    exactSourceName: 'Palnadu',
    slug: 'palnadu',
    path: '/andhra-pradesh/palnadu',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-palnadu-narasaraopet'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/palnadu',
    indexability: true
  },
  {
    id: 'ap-guntur',
    state: 'Andhra Pradesh',
    district: 'Guntur',
    exactSourceName: 'Guntur',
    slug: 'guntur',
    path: '/andhra-pradesh/guntur',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-guntur-urban', 'ap-guntur-tenali', 'ap-guntur-mangalagiri'],
    serviceAvailability: 'Daily phone consultation & marriage matching',
    canonicalUrl: '/locations/andhra-pradesh/guntur',
    indexability: true
  },
  {
    id: 'ap-ntr',
    state: 'Andhra Pradesh',
    district: 'NTR',
    exactSourceName: 'NTR',
    slug: 'ntr',
    path: '/andhra-pradesh/ntr',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-ntr-vijayawada-urban', 'ap-ntr-tiruvuru'],
    serviceAvailability: 'Daily phone consultation for capital region families',
    canonicalUrl: '/locations/andhra-pradesh/ntr',
    indexability: true
  },
  {
    id: 'ap-krishna',
    state: 'Andhra Pradesh',
    district: 'Krishna',
    exactSourceName: 'Krishna',
    slug: 'krishna',
    path: '/andhra-pradesh/krishna',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-krishna-machilipatnam', 'ap-krishna-gudivada', 'ap-krishna-penamaluru'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/krishna',
    indexability: true
  },
  {
    id: 'ap-eluru',
    state: 'Andhra Pradesh',
    district: 'Eluru',
    exactSourceName: 'Eluru',
    slug: 'eluru',
    path: '/andhra-pradesh/eluru',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-eluru-urban', 'ap-eluru-jangareddygudem'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/eluru',
    indexability: true
  },
  {
    id: 'ap-west-godavari',
    state: 'Andhra Pradesh',
    district: 'West Godavari',
    exactSourceName: 'West Godavari',
    slug: 'west-godavari',
    path: '/andhra-pradesh/west-godavari',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-west-godavari-bhimavaram', 'ap-west-godavari-tadepalligudem', 'ap-west-godavari-tanuku'],
    serviceAvailability: 'Daily phone consultation & business Jyotish',
    canonicalUrl: '/locations/andhra-pradesh/west-godavari',
    indexability: true
  },
  {
    id: 'ap-east-godavari',
    state: 'Andhra Pradesh',
    district: 'East Godavari',
    exactSourceName: 'East Godavari',
    slug: 'east-godavari',
    path: '/andhra-pradesh/east-godavari',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-east-godavari-rajamahendravaram', 'ap-east-godavari-kovvur'],
    serviceAvailability: 'Daily phone consultation & Kundali matching',
    canonicalUrl: '/locations/andhra-pradesh/east-godavari',
    indexability: true
  },
  {
    id: 'ap-konaseema',
    state: 'Andhra Pradesh',
    district: 'Dr. B.R. Ambedkar Konaseema',
    exactSourceName: 'Dr. B.R. Ambedkar Konaseema',
    slug: 'konaseema',
    path: '/andhra-pradesh/konaseema',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-konaseema-amalapuram', 'ap-konaseema-ravulapalem'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/konaseema',
    indexability: true
  },
  {
    id: 'ap-kakinada',
    state: 'Andhra Pradesh',
    district: 'Kakinada',
    exactSourceName: 'Kakinada',
    slug: 'kakinada',
    path: '/andhra-pradesh/kakinada',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-kakinada-urban', 'ap-kakinada-samalkota', 'ap-kakinada-pithapuram'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/kakinada',
    indexability: true
  },
  {
    id: 'ap-anakapalli',
    state: 'Andhra Pradesh',
    district: 'Anakapalli',
    exactSourceName: 'Anakapalli',
    slug: 'anakapalli',
    path: '/andhra-pradesh/anakapalli',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-anakapalli-urban'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/anakapalli',
    indexability: true
  },
  {
    id: 'ap-visakhapatnam',
    state: 'Andhra Pradesh',
    district: 'Visakhapatnam',
    exactSourceName: 'Visakhapatnam',
    slug: 'visakhapatnam',
    path: '/andhra-pradesh/visakhapatnam',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-visakhapatnam-urban', 'ap-visakhapatnam-gajuwaka', 'ap-visakhapatnam-bheemunipatnam'],
    serviceAvailability: 'Daily phone consultation & career guidance',
    canonicalUrl: '/locations/andhra-pradesh/visakhapatnam',
    indexability: true
  },
  {
    id: 'ap-vizianagaram',
    state: 'Andhra Pradesh',
    district: 'Vizianagaram',
    exactSourceName: 'Vizianagaram',
    slug: 'vizianagaram',
    path: '/andhra-pradesh/vizianagaram',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-vizianagaram-urban'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/vizianagaram',
    indexability: true
  },
  {
    id: 'ap-parvathipuram-manyam',
    state: 'Andhra Pradesh',
    district: 'Parvathipuram Manyam',
    exactSourceName: 'Parvathipuram Manyam',
    slug: 'parvathipuram-manyam',
    path: '/andhra-pradesh/parvathipuram-manyam',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-parvathipuram-manyam-urban'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/parvathipuram-manyam',
    indexability: true
  },
  {
    id: 'ap-srikakulam',
    state: 'Andhra Pradesh',
    district: 'Srikakulam',
    exactSourceName: 'Srikakulam',
    slug: 'srikakulam',
    path: '/andhra-pradesh/srikakulam',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-srikakulam-urban', 'ap-srikakulam-amadalavalasa'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/srikakulam',
    indexability: true
  },
  {
    id: 'ap-alluri-sitharama-raju',
    state: 'Andhra Pradesh',
    district: 'Alluri Sitharama Raju',
    exactSourceName: 'Alluri Sitharama Raju',
    slug: 'alluri-sitharama-raju',
    path: '/andhra-pradesh/alluri-sitharama-raju',
    level: 'district',
    parentId: 'ap',
    childIds: ['ap-alluri-sitharama-raju-paderu'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/alluri-sitharama-raju',
    indexability: true
  },

  // ==========================================
  // AP MANDALS & VILLAGES / LOCALITIES
  // ==========================================
  // Kurnool District Mandals:
  {
    id: 'ap-kurnool-kurnool-urban',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    mandal: 'Kurnool Urban',
    exactSourceName: 'Kurnool Urban',
    slug: 'kurnool-urban',
    path: '/andhra-pradesh/kurnool/kurnool-urban',
    level: 'mandal',
    parentId: 'ap-kurnool',
    childIds: ['ap-kurnool-kurnool-urban-kallur', 'ap-kurnool-kurnool-urban-joharapuram', 'ap-kurnool-kurnool-urban-bcamp'],
    serviceAvailability: 'In-person consultation in Kurnool & direct phone assistance',
    canonicalUrl: '/locations/andhra-pradesh/kurnool/kurnool-urban'
  },
  {
    id: 'ap-kurnool-kurnool-urban-kallur',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    mandal: 'Kurnool Urban',
    village: 'Kallur',
    exactSourceName: 'Kallur',
    slug: 'kallur',
    path: '/andhra-pradesh/kurnool/kurnool-urban/kallur',
    level: 'village',
    parentId: 'ap-kurnool-kurnool-urban',
    serviceAvailability: 'Astrology consultation for clients in Kallur',
    canonicalUrl: '/locations/andhra-pradesh/kurnool/kurnool-urban/kallur'
  },
  {
    id: 'ap-kurnool-kurnool-urban-joharapuram',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    mandal: 'Kurnool Urban',
    village: 'Joharapuram',
    exactSourceName: 'Joharapuram',
    slug: 'joharapuram',
    path: '/andhra-pradesh/kurnool/kurnool-urban/joharapuram',
    level: 'village',
    parentId: 'ap-kurnool-kurnool-urban',
    serviceAvailability: 'Astrology consultation for clients in Joharapuram',
    canonicalUrl: '/locations/andhra-pradesh/kurnool/kurnool-urban/joharapuram'
  },
  {
    id: 'ap-kurnool-kurnool-urban-bcamp',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    mandal: 'Kurnool Urban',
    village: 'B-Camp',
    exactSourceName: 'B-Camp',
    slug: 'bcamp',
    path: '/andhra-pradesh/kurnool/kurnool-urban/bcamp',
    level: 'village',
    parentId: 'ap-kurnool-kurnool-urban',
    serviceAvailability: 'Astrology consultation for clients in B-Camp',
    canonicalUrl: '/locations/andhra-pradesh/kurnool/kurnool-urban/bcamp'
  },
  {
    id: 'ap-kurnool-adoni',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    mandal: 'Adoni',
    exactSourceName: 'Adoni',
    slug: 'adoni',
    path: '/andhra-pradesh/kurnool/adoni',
    level: 'mandal',
    parentId: 'ap-kurnool',
    childIds: ['ap-kurnool-adoni-arekal', 'ap-kurnool-adoni-alur', 'ap-kurnool-adoni-basapuram', 'ap-kurnool-adoni-isvi', 'ap-kurnool-adoni-mandagiri'],
    serviceAvailability: 'Direct phone & prior arrangement consultations',
    canonicalUrl: '/locations/andhra-pradesh/kurnool/adoni'
  },
  {
    id: 'ap-kurnool-adoni-arekal',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    mandal: 'Adoni',
    village: 'Arekal',
    exactSourceName: 'Arekal',
    slug: 'arekal',
    path: '/andhra-pradesh/kurnool/adoni/arekal',
    level: 'village',
    parentId: 'ap-kurnool-adoni',
    serviceAvailability: 'Astrology consultation for clients in Arekal',
    canonicalUrl: '/locations/andhra-pradesh/kurnool/adoni/arekal'
  },
  {
    id: 'ap-kurnool-adoni-alur',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    mandal: 'Adoni',
    village: 'Alur',
    exactSourceName: 'Alur',
    slug: 'alur',
    path: '/andhra-pradesh/kurnool/adoni/alur',
    level: 'village',
    parentId: 'ap-kurnool-adoni',
    serviceAvailability: 'Astrology consultation for clients in Alur',
    canonicalUrl: '/locations/andhra-pradesh/kurnool/adoni/alur'
  },
  {
    id: 'ap-kurnool-adoni-basapuram',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    mandal: 'Adoni',
    village: 'Basapuram',
    exactSourceName: 'Basapuram',
    slug: 'basapuram',
    path: '/andhra-pradesh/kurnool/adoni/basapuram',
    level: 'village',
    parentId: 'ap-kurnool-adoni',
    serviceAvailability: 'Astrology consultation for clients in Basapuram',
    canonicalUrl: '/locations/andhra-pradesh/kurnool/adoni/basapuram'
  },
  {
    id: 'ap-kurnool-adoni-isvi',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    mandal: 'Adoni',
    village: 'Isvi',
    exactSourceName: 'Isvi',
    slug: 'isvi',
    path: '/andhra-pradesh/kurnool/adoni/isvi',
    level: 'village',
    parentId: 'ap-kurnool-adoni',
    serviceAvailability: 'Astrology consultation for clients in Isvi',
    canonicalUrl: '/locations/andhra-pradesh/kurnool/adoni/isvi'
  },
  {
    id: 'ap-kurnool-adoni-mandagiri',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    mandal: 'Adoni',
    village: 'Mandagiri',
    exactSourceName: 'Mandagiri',
    slug: 'mandagiri',
    path: '/andhra-pradesh/kurnool/adoni/mandagiri',
    level: 'village',
    parentId: 'ap-kurnool-adoni',
    serviceAvailability: 'Astrology consultation for clients in Mandagiri',
    canonicalUrl: '/locations/andhra-pradesh/kurnool/adoni/mandagiri'
  },
  {
    id: 'ap-kurnool-yemmiganur',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    mandal: 'Yemmiganur',
    exactSourceName: 'Yemmiganur',
    slug: 'yemmiganur',
    path: '/andhra-pradesh/kurnool/yemmiganur',
    level: 'mandal',
    parentId: 'ap-kurnool',
    childIds: ['ap-kurnool-yemmiganur-banavasi', 'ap-kurnool-yemmiganur-mugati'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/kurnool/yemmiganur'
  },
  {
    id: 'ap-kurnool-yemmiganur-banavasi',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    mandal: 'Yemmiganur',
    village: 'Banavasi',
    exactSourceName: 'Banavasi',
    slug: 'banavasi',
    path: '/andhra-pradesh/kurnool/yemmiganur/banavasi',
    level: 'village',
    parentId: 'ap-kurnool-yemmiganur',
    serviceAvailability: 'Astrology consultation for clients in Banavasi',
    canonicalUrl: '/locations/andhra-pradesh/kurnool/yemmiganur/banavasi'
  },
  {
    id: 'ap-kurnool-yemmiganur-mugati',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    mandal: 'Yemmiganur',
    village: 'Mugati',
    exactSourceName: 'Mugati',
    slug: 'mugati',
    path: '/andhra-pradesh/kurnool/yemmiganur/mugati',
    level: 'village',
    parentId: 'ap-kurnool-yemmiganur',
    serviceAvailability: 'Astrology consultation for clients in Mugati',
    canonicalUrl: '/locations/andhra-pradesh/kurnool/yemmiganur/mugati'
  },
  {
    id: 'ap-kurnool-dhone',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    mandal: 'Dhone',
    exactSourceName: 'Dhone',
    slug: 'dhone',
    path: '/andhra-pradesh/kurnool/dhone',
    level: 'mandal',
    parentId: 'ap-kurnool',
    childIds: ['ap-kurnool-dhone-kotakadira'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/kurnool/dhone'
  },
  {
    id: 'ap-kurnool-dhone-kotakadira',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    mandal: 'Dhone',
    village: 'Kotakadira',
    exactSourceName: 'Kotakadira',
    slug: 'kotakadira',
    path: '/andhra-pradesh/kurnool/dhone/kotakadira',
    level: 'village',
    parentId: 'ap-kurnool-dhone',
    serviceAvailability: 'Astrology consultation for clients in Kotakadira',
    canonicalUrl: '/locations/andhra-pradesh/kurnool/dhone/kotakadira'
  },
  {
    id: 'ap-kurnool-pattikonda',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    mandal: 'Pattikonda',
    exactSourceName: 'Pattikonda',
    slug: 'pattikonda',
    path: '/andhra-pradesh/kurnool/pattikonda',
    level: 'mandal',
    parentId: 'ap-kurnool',
    childIds: ['ap-kurnool-pattikonda-devanakonda'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/kurnool/pattikonda'
  },
  {
    id: 'ap-kurnool-pattikonda-devanakonda',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    mandal: 'Pattikonda',
    village: 'Devanakonda',
    exactSourceName: 'Devanakonda',
    slug: 'devanakonda',
    path: '/andhra-pradesh/kurnool/pattikonda/devanakonda',
    level: 'village',
    parentId: 'ap-kurnool-pattikonda',
    serviceAvailability: 'Astrology consultation for clients in Devanakonda',
    canonicalUrl: '/locations/andhra-pradesh/kurnool/pattikonda/devanakonda'
  },
  // Nandyal Mandals & Villages:
  {
    id: 'ap-nandyal-nandyal-urban',
    state: 'Andhra Pradesh',
    district: 'Nandyal',
    mandal: 'Nandyal Urban',
    exactSourceName: 'Nandyal Urban',
    slug: 'nandyal-urban',
    path: '/andhra-pradesh/nandyal/nandyal-urban',
    level: 'mandal',
    parentId: 'ap-nandyal',
    childIds: ['ap-nandyal-nandyal-urban-mahanandi'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/nandyal/nandyal-urban'
  },
  {
    id: 'ap-nandyal-nandyal-urban-mahanandi',
    state: 'Andhra Pradesh',
    district: 'Nandyal',
    mandal: 'Nandyal Urban',
    village: 'Mahanandi',
    exactSourceName: 'Mahanandi',
    slug: 'mahanandi',
    path: '/andhra-pradesh/nandyal/nandyal-urban/mahanandi',
    level: 'village',
    parentId: 'ap-nandyal-nandyal-urban',
    serviceAvailability: 'Astrology consultation for clients in Mahanandi',
    canonicalUrl: '/locations/andhra-pradesh/nandyal/nandyal-urban/mahanandi'
  },
  {
    id: 'ap-nandyal-allagadda',
    state: 'Andhra Pradesh',
    district: 'Nandyal',
    mandal: 'Allagadda',
    exactSourceName: 'Allagadda',
    slug: 'allagadda',
    path: '/andhra-pradesh/nandyal/allagadda',
    level: 'mandal',
    parentId: 'ap-nandyal',
    childIds: ['ap-nandyal-allagadda-ahobilam'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/nandyal/allagadda'
  },
  {
    id: 'ap-nandyal-allagadda-ahobilam',
    state: 'Andhra Pradesh',
    district: 'Nandyal',
    mandal: 'Allagadda',
    village: 'Ahobilam',
    exactSourceName: 'Ahobilam',
    slug: 'ahobilam',
    path: '/andhra-pradesh/nandyal/allagadda/ahobilam',
    level: 'village',
    parentId: 'ap-nandyal-allagadda',
    serviceAvailability: 'Astrology consultation for clients in Ahobilam',
    canonicalUrl: '/locations/andhra-pradesh/nandyal/allagadda/ahobilam'
  },
  {
    id: 'ap-nandyal-banaganapalle',
    state: 'Andhra Pradesh',
    district: 'Nandyal',
    mandal: 'Banaganapalle',
    exactSourceName: 'Banaganapalle',
    slug: 'banaganapalle',
    path: '/andhra-pradesh/nandyal/banaganapalle',
    level: 'mandal',
    parentId: 'ap-nandyal',
    childIds: ['ap-nandyal-banaganapalle-yaganti'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/nandyal/banaganapalle'
  },
  {
    id: 'ap-nandyal-banaganapalle-yaganti',
    state: 'Andhra Pradesh',
    district: 'Nandyal',
    mandal: 'Banaganapalle',
    village: 'Yaganti',
    exactSourceName: 'Yaganti',
    slug: 'yaganti',
    path: '/andhra-pradesh/nandyal/banaganapalle/yaganti',
    level: 'village',
    parentId: 'ap-nandyal-banaganapalle',
    serviceAvailability: 'Astrology consultation for clients in Yaganti',
    canonicalUrl: '/locations/andhra-pradesh/nandyal/banaganapalle/yaganti'
  },
  // Tirupati Mandals & Villages:
  {
    id: 'ap-tirupati-urban',
    state: 'Andhra Pradesh',
    district: 'Tirupati',
    mandal: 'Tirupati Urban',
    exactSourceName: 'Tirupati Urban',
    slug: 'tirupati-urban',
    path: '/andhra-pradesh/tirupati/tirupati-urban',
    level: 'mandal',
    parentId: 'ap-tirupati',
    childIds: ['ap-tirupati-urban-renigunta'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/tirupati/tirupati-urban'
  },
  {
    id: 'ap-tirupati-urban-renigunta',
    state: 'Andhra Pradesh',
    district: 'Tirupati',
    mandal: 'Tirupati Urban',
    village: 'Renigunta',
    exactSourceName: 'Renigunta',
    slug: 'renigunta',
    path: '/andhra-pradesh/tirupati/tirupati-urban/renigunta',
    level: 'village',
    parentId: 'ap-tirupati-urban',
    serviceAvailability: 'Astrology consultation for clients in Renigunta',
    canonicalUrl: '/locations/andhra-pradesh/tirupati/tirupati-urban/renigunta'
  },
  {
    id: 'ap-tirupati-chandragiri',
    state: 'Andhra Pradesh',
    district: 'Tirupati',
    mandal: 'Chandragiri',
    exactSourceName: 'Chandragiri',
    slug: 'chandragiri',
    path: '/andhra-pradesh/tirupati/chandragiri',
    level: 'mandal',
    parentId: 'ap-tirupati',
    childIds: [],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/tirupati/chandragiri'
  },
  {
    id: 'ap-tirupati-srikalahasti',
    state: 'Andhra Pradesh',
    district: 'Tirupati',
    mandal: 'Srikalahasti',
    exactSourceName: 'Srikalahasti',
    slug: 'srikalahasti',
    path: '/andhra-pradesh/tirupati/srikalahasti',
    level: 'mandal',
    parentId: 'ap-tirupati',
    childIds: [],
    serviceAvailability: 'Daily phone consultation & Rahu-Ketu dosha guidance',
    canonicalUrl: '/locations/andhra-pradesh/tirupati/srikalahasti'
  },
  // Guntur Mandals:
  {
    id: 'ap-guntur-urban',
    state: 'Andhra Pradesh',
    district: 'Guntur',
    mandal: 'Guntur Urban',
    exactSourceName: 'Guntur Urban',
    slug: 'guntur-urban',
    path: '/andhra-pradesh/guntur/guntur-urban',
    level: 'mandal',
    parentId: 'ap-guntur',
    childIds: [],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/guntur/guntur-urban'
  },
  {
    id: 'ap-guntur-tenali',
    state: 'Andhra Pradesh',
    district: 'Guntur',
    mandal: 'Tenali',
    exactSourceName: 'Tenali',
    slug: 'tenali',
    path: '/andhra-pradesh/guntur/tenali',
    level: 'mandal',
    parentId: 'ap-guntur',
    childIds: [],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/guntur/tenali'
  },
  {
    id: 'ap-guntur-mangalagiri',
    state: 'Andhra Pradesh',
    district: 'Guntur',
    mandal: 'Mangalagiri',
    exactSourceName: 'Mangalagiri',
    slug: 'mangalagiri',
    path: '/andhra-pradesh/guntur/mangalagiri',
    level: 'mandal',
    parentId: 'ap-guntur',
    childIds: [],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/guntur/mangalagiri'
  },
  // NTR / Vijayawada Mandals:
  {
    id: 'ap-ntr-vijayawada-urban',
    state: 'Andhra Pradesh',
    district: 'NTR',
    mandal: 'Vijayawada Urban',
    exactSourceName: 'Vijayawada Urban',
    slug: 'vijayawada-urban',
    path: '/andhra-pradesh/ntr/vijayawada-urban',
    level: 'mandal',
    parentId: 'ap-ntr',
    childIds: ['ap-ntr-vijayawada-urban-governorpet', 'ap-ntr-vijayawada-urban-patamata'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/andhra-pradesh/ntr/vijayawada-urban'
  },
  {
    id: 'ap-ntr-vijayawada-urban-governorpet',
    state: 'Andhra Pradesh',
    district: 'NTR',
    mandal: 'Vijayawada Urban',
    village: 'Governorpet',
    exactSourceName: 'Governorpet',
    slug: 'governorpet',
    path: '/andhra-pradesh/ntr/vijayawada-urban/governorpet',
    level: 'village',
    parentId: 'ap-ntr-vijayawada-urban',
    serviceAvailability: 'Astrology consultation for clients in Governorpet',
    canonicalUrl: '/locations/andhra-pradesh/ntr/vijayawada-urban/governorpet'
  },
  {
    id: 'ap-ntr-vijayawada-urban-patamata',
    state: 'Andhra Pradesh',
    district: 'NTR',
    mandal: 'Vijayawada Urban',
    village: 'Patamata',
    exactSourceName: 'Patamata',
    slug: 'patamata',
    path: '/andhra-pradesh/ntr/vijayawada-urban/patamata',
    level: 'village',
    parentId: 'ap-ntr-vijayawada-urban',
    serviceAvailability: 'Astrology consultation for clients in Patamata',
    canonicalUrl: '/locations/andhra-pradesh/ntr/vijayawada-urban/patamata'
  },

  // ==========================================
  // TELANGANA — ALL 33 OFFICIAL DISTRICTS
  // ==========================================
  {
    id: 'tg-hyderabad',
    state: 'Telangana',
    district: 'Hyderabad',
    exactSourceName: 'Hyderabad',
    slug: 'hyderabad',
    path: '/telangana/hyderabad',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-hyderabad-ameerpet', 'tg-hyderabad-secunderabad', 'tg-hyderabad-khairatabad', 'tg-hyderabad-charminar'],
    serviceAvailability: 'Extensive daily phone consultations for Greater Hyderabad families',
    canonicalUrl: '/locations/telangana/hyderabad',
    indexability: true
  },
  {
    id: 'tg-medchal-malkajgiri',
    state: 'Telangana',
    district: 'Medchal-Malkajgiri',
    exactSourceName: 'Medchal-Malkajgiri',
    slug: 'medchal-malkajgiri',
    path: '/telangana/medchal-malkajgiri',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-medchal-malkajgiri-malkajgiri', 'tg-medchal-malkajgiri-uppal', 'tg-medchal-malkajgiri-alwal'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/medchal-malkajgiri',
    indexability: true
  },
  {
    id: 'tg-rangareddy',
    state: 'Telangana',
    district: 'Rangareddy',
    exactSourceName: 'Rangareddy',
    slug: 'rangareddy',
    path: '/telangana/rangareddy',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-rangareddy-serilingampally', 'tg-rangareddy-rajendranagar', 'tg-rangareddy-shamshabad'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/rangareddy',
    indexability: true
  },
  {
    id: 'tg-sangareddy',
    state: 'Telangana',
    district: 'Sangareddy',
    exactSourceName: 'Sangareddy',
    slug: 'sangareddy',
    path: '/telangana/sangareddy',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-sangareddy-urban', 'tg-sangareddy-patancheru'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/sangareddy',
    indexability: true
  },
  {
    id: 'tg-siddipet',
    state: 'Telangana',
    district: 'Siddipet',
    exactSourceName: 'Siddipet',
    slug: 'siddipet',
    path: '/telangana/siddipet',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-siddipet-urban', 'tg-siddipet-gajwel'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/siddipet',
    indexability: true
  },
  {
    id: 'tg-hanamkonda',
    state: 'Telangana',
    district: 'Hanamkonda',
    exactSourceName: 'Hanamkonda',
    slug: 'hanamkonda',
    path: '/telangana/hanamkonda',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-hanamkonda-urban', 'tg-hanamkonda-kazipet'],
    serviceAvailability: 'Daily phone consultation & marriage astrology',
    canonicalUrl: '/locations/telangana/hanamkonda',
    indexability: true
  },
  {
    id: 'tg-warangal',
    state: 'Telangana',
    district: 'Warangal',
    exactSourceName: 'Warangal',
    slug: 'warangal',
    path: '/telangana/warangal',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-warangal-urban'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/warangal',
    indexability: true
  },
  {
    id: 'tg-karimnagar',
    state: 'Telangana',
    district: 'Karimnagar',
    exactSourceName: 'Karimnagar',
    slug: 'karimnagar',
    path: '/telangana/karimnagar',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-karimnagar-urban', 'tg-karimnagar-huzurabad'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/karimnagar',
    indexability: true
  },
  {
    id: 'tg-nizamabad',
    state: 'Telangana',
    district: 'Nizamabad',
    exactSourceName: 'Nizamabad',
    slug: 'nizamabad',
    path: '/telangana/nizamabad',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-nizamabad-urban', 'tg-nizamabad-armoor', 'tg-nizamabad-bodhan'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/nizamabad',
    indexability: true
  },
  {
    id: 'tg-khammam',
    state: 'Telangana',
    district: 'Khammam',
    exactSourceName: 'Khammam',
    slug: 'khammam',
    path: '/telangana/khammam',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-khammam-urban', 'tg-khammam-madhira'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/khammam',
    indexability: true
  },
  {
    id: 'tg-bhadradri-kothagudem',
    state: 'Telangana',
    district: 'Bhadradri Kothagudem',
    exactSourceName: 'Bhadradri Kothagudem',
    slug: 'bhadradri-kothagudem',
    path: '/telangana/bhadradri-kothagudem',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-bhadradri-kothagudem-urban', 'tg-bhadradri-kothagudem-bhadrachalam'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/bhadradri-kothagudem',
    indexability: true
  },
  {
    id: 'tg-mahabubnagar',
    state: 'Telangana',
    district: 'Mahabubnagar',
    exactSourceName: 'Mahabubnagar',
    slug: 'mahabubnagar',
    path: '/telangana/mahabubnagar',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-mahabubnagar-urban', 'tg-mahabubnagar-jadcherla'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/mahabubnagar',
    indexability: true
  },
  {
    id: 'tg-nagarkurnool',
    state: 'Telangana',
    district: 'Nagarkurnool',
    exactSourceName: 'Nagarkurnool',
    slug: 'nagarkurnool',
    path: '/telangana/nagarkurnool',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-nagarkurnool-urban'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/nagarkurnool',
    indexability: true
  },
  {
    id: 'tg-wanaparthy',
    state: 'Telangana',
    district: 'Wanaparthy',
    exactSourceName: 'Wanaparthy',
    slug: 'wanaparthy',
    path: '/telangana/wanaparthy',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-wanaparthy-urban'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/wanaparthy',
    indexability: true
  },
  {
    id: 'tg-jogulamba-gadwal',
    state: 'Telangana',
    district: 'Jogulamba Gadwal',
    exactSourceName: 'Jogulamba Gadwal',
    slug: 'jogulamba-gadwal',
    path: '/telangana/jogulamba-gadwal',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-jogulamba-gadwal-urban', 'tg-jogulamba-gadwal-alampur'],
    serviceAvailability: 'Daily phone consultation & proximity to Kurnool',
    canonicalUrl: '/locations/telangana/jogulamba-gadwal',
    indexability: true
  },
  {
    id: 'tg-narayanpet',
    state: 'Telangana',
    district: 'Narayanpet',
    exactSourceName: 'Narayanpet',
    slug: 'narayanpet',
    path: '/telangana/narayanpet',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-narayanpet-urban'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/narayanpet',
    indexability: true
  },
  {
    id: 'tg-nalgonda',
    state: 'Telangana',
    district: 'Nalgonda',
    exactSourceName: 'Nalgonda',
    slug: 'nalgonda',
    path: '/telangana/nalgonda',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-nalgonda-urban', 'tg-nalgonda-miryalaguda'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/nalgonda',
    indexability: true
  },
  {
    id: 'tg-suryapet',
    state: 'Telangana',
    district: 'Suryapet',
    exactSourceName: 'Suryapet',
    slug: 'suryapet',
    path: '/telangana/suryapet',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-suryapet-urban', 'tg-suryapet-kodad'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/suryapet',
    indexability: true
  },
  {
    id: 'tg-yadadri-bhuvanagiri',
    state: 'Telangana',
    district: 'Yadadri Bhuvanagiri',
    exactSourceName: 'Yadadri Bhuvanagiri',
    slug: 'yadadri-bhuvanagiri',
    path: '/telangana/yadadri-bhuvanagiri',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-yadadri-bhuvanagiri-urban', 'tg-yadadri-bhuvanagiri-bhongir'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/yadadri-bhuvanagiri',
    indexability: true
  },
  {
    id: 'tg-jagtial',
    state: 'Telangana',
    district: 'Jagtial',
    exactSourceName: 'Jagtial',
    slug: 'jagtial',
    path: '/telangana/jagtial',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-jagtial-urban', 'tg-jagtial-korutla'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/jagtial',
    indexability: true
  },
  {
    id: 'tg-rajanna-sircilla',
    state: 'Telangana',
    district: 'Rajanna Sircilla',
    exactSourceName: 'Rajanna Sircilla',
    slug: 'rajanna-sircilla',
    path: '/telangana/rajanna-sircilla',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-rajanna-sircilla-urban', 'tg-rajanna-sircilla-vemulawada'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/rajanna-sircilla',
    indexability: true
  },
  {
    id: 'tg-peddapalli',
    state: 'Telangana',
    district: 'Peddapalli',
    exactSourceName: 'Peddapalli',
    slug: 'peddapalli',
    path: '/telangana/peddapalli',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-peddapalli-urban', 'tg-peddapalli-ramagundam'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/peddapalli',
    indexability: true
  },
  {
    id: 'tg-kamareddy',
    state: 'Telangana',
    district: 'Kamareddy',
    exactSourceName: 'Kamareddy',
    slug: 'kamareddy',
    path: '/telangana/kamareddy',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-kamareddy-urban'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/kamareddy',
    indexability: true
  },
  {
    id: 'tg-medak',
    state: 'Telangana',
    district: 'Medak',
    exactSourceName: 'Medak',
    slug: 'medak',
    path: '/telangana/medak',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-medak-urban'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/medak',
    indexability: true
  },
  {
    id: 'tg-vikarabad',
    state: 'Telangana',
    district: 'Vikarabad',
    exactSourceName: 'Vikarabad',
    slug: 'vikarabad',
    path: '/telangana/vikarabad',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-vikarabad-urban', 'tg-vikarabad-tandur'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/vikarabad',
    indexability: true
  },
  {
    id: 'tg-jangaon',
    state: 'Telangana',
    district: 'Jangaon',
    exactSourceName: 'Jangaon',
    slug: 'jangaon',
    path: '/telangana/jangaon',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-jangaon-urban'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/jangaon',
    indexability: true
  },
  {
    id: 'tg-jayashankar-bhupalpally',
    state: 'Telangana',
    district: 'Jayashankar Bhupalpally',
    exactSourceName: 'Jayashankar Bhupalpally',
    slug: 'jayashankar-bhupalpally',
    path: '/telangana/jayashankar-bhupalpally',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-jayashankar-bhupalpally-urban'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/jayashankar-bhupalpally',
    indexability: true
  },
  {
    id: 'tg-mahabubabad',
    state: 'Telangana',
    district: 'Mahabubabad',
    exactSourceName: 'Mahabubabad',
    slug: 'mahabubabad',
    path: '/telangana/mahabubabad',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-mahabubabad-urban'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/mahabubabad',
    indexability: true
  },
  {
    id: 'tg-mulugu',
    state: 'Telangana',
    district: 'Mulugu',
    exactSourceName: 'Mulugu',
    slug: 'mulugu',
    path: '/telangana/mulugu',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-mulugu-urban'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/mulugu',
    indexability: true
  },
  {
    id: 'tg-adilabad',
    state: 'Telangana',
    district: 'Adilabad',
    exactSourceName: 'Adilabad',
    slug: 'adilabad',
    path: '/telangana/adilabad',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-adilabad-urban'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/adilabad',
    indexability: true
  },
  {
    id: 'tg-nirmal',
    state: 'Telangana',
    district: 'Nirmal',
    exactSourceName: 'Nirmal',
    slug: 'nirmal',
    path: '/telangana/nirmal',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-nirmal-urban', 'tg-nirmal-bhainsa'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/nirmal',
    indexability: true
  },
  {
    id: 'tg-mancherial',
    state: 'Telangana',
    district: 'Mancherial',
    exactSourceName: 'Mancherial',
    slug: 'mancherial',
    path: '/telangana/mancherial',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-mancherial-urban', 'tg-mancherial-bellampalli'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/mancherial',
    indexability: true
  },
  {
    id: 'tg-kumuram-bheem-asifabad',
    state: 'Telangana',
    district: 'Kumuram Bheem Asifabad',
    exactSourceName: 'Kumuram Bheem Asifabad',
    slug: 'kumuram-bheem-asifabad',
    path: '/telangana/kumuram-bheem-asifabad',
    level: 'district',
    parentId: 'tg',
    childIds: ['tg-kumuram-bheem-asifabad-urban'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/kumuram-bheem-asifabad',
    indexability: true
  },

  // ==========================================
  // TG MANDALS & VILLAGES / LOCALITIES
  // ==========================================
  // Hyderabad Mandals & Localities:
  {
    id: 'tg-hyderabad-ameerpet',
    state: 'Telangana',
    district: 'Hyderabad',
    mandal: 'Ameerpet',
    exactSourceName: 'Ameerpet',
    slug: 'ameerpet',
    path: '/telangana/hyderabad/ameerpet',
    level: 'mandal',
    parentId: 'tg-hyderabad',
    childIds: ['tg-hyderabad-ameerpet-srnagar', 'tg-hyderabad-ameerpet-punjagutta'],
    serviceAvailability: 'Phone consultations for residents in Ameerpet mandal',
    canonicalUrl: '/locations/telangana/hyderabad/ameerpet'
  },
  {
    id: 'tg-hyderabad-ameerpet-srnagar',
    state: 'Telangana',
    district: 'Hyderabad',
    mandal: 'Ameerpet',
    village: 'SR Nagar',
    exactSourceName: 'SR Nagar',
    slug: 'srnagar',
    path: '/telangana/hyderabad/ameerpet/srnagar',
    level: 'village',
    parentId: 'tg-hyderabad-ameerpet',
    serviceAvailability: 'Astrology consultation for clients in SR Nagar',
    canonicalUrl: '/locations/telangana/hyderabad/ameerpet/srnagar'
  },
  {
    id: 'tg-hyderabad-ameerpet-punjagutta',
    state: 'Telangana',
    district: 'Hyderabad',
    mandal: 'Ameerpet',
    village: 'Punjagutta',
    exactSourceName: 'Punjagutta',
    slug: 'punjagutta',
    path: '/telangana/hyderabad/ameerpet/punjagutta',
    level: 'village',
    parentId: 'tg-hyderabad-ameerpet',
    serviceAvailability: 'Astrology consultation for clients in Punjagutta',
    canonicalUrl: '/locations/telangana/hyderabad/ameerpet/punjagutta'
  },
  {
    id: 'tg-hyderabad-secunderabad',
    state: 'Telangana',
    district: 'Hyderabad',
    mandal: 'Secunderabad',
    exactSourceName: 'Secunderabad',
    slug: 'secunderabad',
    path: '/telangana/hyderabad/secunderabad',
    level: 'mandal',
    parentId: 'tg-hyderabad',
    childIds: ['tg-hyderabad-secunderabad-marredpally', 'tg-hyderabad-secunderabad-begumpet'],
    serviceAvailability: 'Phone consultations for Secunderabad families',
    canonicalUrl: '/locations/telangana/hyderabad/secunderabad'
  },
  {
    id: 'tg-hyderabad-secunderabad-marredpally',
    state: 'Telangana',
    district: 'Hyderabad',
    mandal: 'Secunderabad',
    village: 'Marredpally',
    exactSourceName: 'Marredpally',
    slug: 'marredpally',
    path: '/telangana/hyderabad/secunderabad/marredpally',
    level: 'village',
    parentId: 'tg-hyderabad-secunderabad',
    serviceAvailability: 'Astrology consultation for clients in Marredpally',
    canonicalUrl: '/locations/telangana/hyderabad/secunderabad/marredpally'
  },
  {
    id: 'tg-hyderabad-secunderabad-begumpet',
    state: 'Telangana',
    district: 'Hyderabad',
    mandal: 'Secunderabad',
    village: 'Begumpet',
    exactSourceName: 'Begumpet',
    slug: 'begumpet',
    path: '/telangana/hyderabad/secunderabad/begumpet',
    level: 'village',
    parentId: 'tg-hyderabad-secunderabad',
    serviceAvailability: 'Astrology consultation for clients in Begumpet',
    canonicalUrl: '/locations/telangana/hyderabad/secunderabad/begumpet'
  },
  {
    id: 'tg-hyderabad-khairatabad',
    state: 'Telangana',
    district: 'Hyderabad',
    mandal: 'Khairatabad',
    exactSourceName: 'Khairatabad',
    slug: 'khairatabad',
    path: '/telangana/hyderabad/khairatabad',
    level: 'mandal',
    parentId: 'tg-hyderabad',
    childIds: ['tg-hyderabad-khairatabad-banjara-hills', 'tg-hyderabad-khairatabad-jubilee-hills'],
    serviceAvailability: 'Phone consultations for Khairatabad area residents',
    canonicalUrl: '/locations/telangana/hyderabad/khairatabad'
  },
  {
    id: 'tg-hyderabad-khairatabad-banjara-hills',
    state: 'Telangana',
    district: 'Hyderabad',
    mandal: 'Khairatabad',
    village: 'Banjara Hills',
    exactSourceName: 'Banjara Hills',
    slug: 'banjara-hills',
    path: '/telangana/hyderabad/khairatabad/banjara-hills',
    level: 'village',
    parentId: 'tg-hyderabad-khairatabad',
    serviceAvailability: 'Astrology consultation for clients in Banjara Hills',
    canonicalUrl: '/locations/telangana/hyderabad/khairatabad/banjara-hills'
  },
  {
    id: 'tg-hyderabad-khairatabad-jubilee-hills',
    state: 'Telangana',
    district: 'Hyderabad',
    mandal: 'Khairatabad',
    village: 'Jubilee Hills',
    exactSourceName: 'Jubilee Hills',
    slug: 'jubilee-hills',
    path: '/telangana/hyderabad/khairatabad/jubilee-hills',
    level: 'village',
    parentId: 'tg-hyderabad-khairatabad',
    serviceAvailability: 'Astrology consultation for clients in Jubilee Hills',
    canonicalUrl: '/locations/telangana/hyderabad/khairatabad/jubilee-hills'
  },
  {
    id: 'tg-hyderabad-charminar',
    state: 'Telangana',
    district: 'Hyderabad',
    mandal: 'Charminar',
    exactSourceName: 'Charminar',
    slug: 'charminar',
    path: '/telangana/hyderabad/charminar',
    level: 'mandal',
    parentId: 'tg-hyderabad',
    childIds: ['tg-hyderabad-charminar-chandrayangutta'],
    serviceAvailability: 'Phone consultations for Old City Hyderabad families',
    canonicalUrl: '/locations/telangana/hyderabad/charminar'
  },
  {
    id: 'tg-hyderabad-charminar-chandrayangutta',
    state: 'Telangana',
    district: 'Hyderabad',
    mandal: 'Charminar',
    village: 'Chandrayangutta',
    exactSourceName: 'Chandrayangutta',
    slug: 'chandrayangutta',
    path: '/telangana/hyderabad/charminar/chandrayangutta',
    level: 'village',
    parentId: 'tg-hyderabad-charminar',
    serviceAvailability: 'Astrology consultation for clients in Chandrayangutta',
    canonicalUrl: '/locations/telangana/hyderabad/charminar/chandrayangutta'
  },

  // Rangareddy Mandals & Localities:
  {
    id: 'tg-rangareddy-serilingampally',
    state: 'Telangana',
    district: 'Rangareddy',
    mandal: 'Serilingampally',
    exactSourceName: 'Serilingampally',
    slug: 'serilingampally',
    path: '/telangana/rangareddy/serilingampally',
    level: 'mandal',
    parentId: 'tg-rangareddy',
    childIds: ['tg-rangareddy-serilingampally-gachibowli', 'tg-rangareddy-serilingampally-madhapur', 'tg-rangareddy-serilingampally-kondapur'],
    serviceAvailability: 'Phone consultations for IT corridor & tech professionals',
    canonicalUrl: '/locations/telangana/rangareddy/serilingampally'
  },
  {
    id: 'tg-rangareddy-serilingampally-gachibowli',
    state: 'Telangana',
    district: 'Rangareddy',
    mandal: 'Serilingampally',
    village: 'Gachibowli',
    exactSourceName: 'Gachibowli',
    slug: 'gachibowli',
    path: '/telangana/rangareddy/serilingampally/gachibowli',
    level: 'village',
    parentId: 'tg-rangareddy-serilingampally',
    serviceAvailability: 'Astrology consultation for clients in Gachibowli',
    canonicalUrl: '/locations/telangana/rangareddy/serilingampally/gachibowli'
  },
  {
    id: 'tg-rangareddy-serilingampally-madhapur',
    state: 'Telangana',
    district: 'Rangareddy',
    mandal: 'Serilingampally',
    village: 'Madhapur',
    exactSourceName: 'Madhapur',
    slug: 'madhapur',
    path: '/telangana/rangareddy/serilingampally/madhapur',
    level: 'village',
    parentId: 'tg-rangareddy-serilingampally',
    serviceAvailability: 'Astrology consultation for clients in Madhapur',
    canonicalUrl: '/locations/telangana/rangareddy/serilingampally/madhapur'
  },
  {
    id: 'tg-rangareddy-serilingampally-kondapur',
    state: 'Telangana',
    district: 'Rangareddy',
    mandal: 'Serilingampally',
    village: 'Kondapur',
    exactSourceName: 'Kondapur',
    slug: 'kondapur',
    path: '/telangana/rangareddy/serilingampally/kondapur',
    level: 'village',
    parentId: 'tg-rangareddy-serilingampally',
    serviceAvailability: 'Astrology consultation for clients in Kondapur',
    canonicalUrl: '/locations/telangana/rangareddy/serilingampally/kondapur'
  },

  // Hanamkonda Mandals:
  {
    id: 'tg-hanamkonda-urban',
    state: 'Telangana',
    district: 'Hanamkonda',
    mandal: 'Hanamkonda Urban',
    exactSourceName: 'Hanamkonda Urban',
    slug: 'hanamkonda-urban',
    path: '/telangana/hanamkonda/hanamkonda-urban',
    level: 'mandal',
    parentId: 'tg-hanamkonda',
    childIds: ['tg-hanamkonda-urban-subedari'],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/hanamkonda/hanamkonda-urban'
  },
  {
    id: 'tg-hanamkonda-urban-subedari',
    state: 'Telangana',
    district: 'Hanamkonda',
    mandal: 'Hanamkonda Urban',
    village: 'Subedari',
    exactSourceName: 'Subedari',
    slug: 'subedari',
    path: '/telangana/hanamkonda/hanamkonda-urban/subedari',
    level: 'village',
    parentId: 'tg-hanamkonda-urban',
    serviceAvailability: 'Astrology consultation for clients in Subedari',
    canonicalUrl: '/locations/telangana/hanamkonda/hanamkonda-urban/subedari'
  },
  {
    id: 'tg-hanamkonda-kazipet',
    state: 'Telangana',
    district: 'Hanamkonda',
    mandal: 'Kazipet',
    exactSourceName: 'Kazipet',
    slug: 'kazipet',
    path: '/telangana/hanamkonda/kazipet',
    level: 'mandal',
    parentId: 'tg-hanamkonda',
    childIds: [],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/hanamkonda/kazipet'
  },

  // Karimnagar Mandals:
  {
    id: 'tg-karimnagar-urban',
    state: 'Telangana',
    district: 'Karimnagar',
    mandal: 'Karimnagar Urban',
    exactSourceName: 'Karimnagar Urban',
    slug: 'karimnagar-urban',
    path: '/telangana/karimnagar/karimnagar-urban',
    level: 'mandal',
    parentId: 'tg-karimnagar',
    childIds: [],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/karimnagar/karimnagar-urban'
  },
  {
    id: 'tg-karimnagar-huzurabad',
    state: 'Telangana',
    district: 'Karimnagar',
    mandal: 'Huzurabad',
    exactSourceName: 'Huzurabad',
    slug: 'huzurabad',
    path: '/telangana/karimnagar/huzurabad',
    level: 'mandal',
    parentId: 'tg-karimnagar',
    childIds: [],
    serviceAvailability: 'Daily phone consultation',
    canonicalUrl: '/locations/telangana/karimnagar/huzurabad'
  }
];

// Helper to capital-case a slug (e.g. "ysr-kadapa" -> "YSR Kadapa", "atlur" -> "Atlur", "yerraballe" -> "Yerraballe")
const capitalizeSlug = (slug: string): string => {
  return slug
    .split('-')
    .map(word => {
      if (word === 'ysr') return 'YSR';
      if (word === 'ap') return 'AP';
      if (word === 'tg') return 'TG';
      if (word === 'rtc') return 'RTC';
      if (word === 'ngo') return 'NGO';
      if (word === 'lbs') return 'LBS';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

export const getDynamicLocation = (
  stateSlug: string,
  districtSlug?: string,
  mandalOrCitySlug?: string,
  villageOrNeighbourhoodSlug?: string
): AppLocation | null => {
  const stateData = rawHierarchicalLocations[stateSlug];
  if (!stateData) return null;

  if (!districtSlug) {
    return {
      id: stateSlug,
      state: stateData.name,
      district: '',
      exactSourceName: stateData.name,
      slug: stateSlug,
      path: `/${stateSlug}`,
      level: 'state',
      canonicalUrl: `/locations/${stateSlug}`,
      indexability: true,
      serviceAvailability: 'Daily telephone & scheduled in-person consultations'
    };
  }

  const districtData = stateData.districts[districtSlug];
  if (!districtData) return null;

  if (!mandalOrCitySlug) {
    return {
      id: `${stateCode(stateSlug)}-${districtSlug}`,
      state: stateData.name,
      district: districtData.name,
      exactSourceName: districtData.name,
      slug: districtSlug,
      path: `/${stateSlug}/${districtSlug}`,
      level: 'district',
      parentId: stateCode(stateSlug),
      canonicalUrl: `/locations/${stateSlug}/${districtSlug}`,
      indexability: true,
      serviceAvailability: 'Daily telephone consultations across the district'
    };
  }

  // Segment 3 can be either a mandal or a city
  const mandalData = districtData.mandals?.[mandalOrCitySlug];
  const cityData = districtData.cities?.[mandalOrCitySlug];

  if (!villageOrNeighbourhoodSlug) {
    if (mandalData) {
      return {
        id: `${stateCode(stateSlug)}-${districtSlug}-${mandalOrCitySlug}`,
        state: stateData.name,
        district: districtData.name,
        mandal: mandalData.name,
        exactSourceName: mandalData.name,
        slug: mandalOrCitySlug,
        path: `/${stateSlug}/${districtSlug}/${mandalOrCitySlug}`,
        level: 'mandal',
        parentId: `${stateCode(stateSlug)}-${districtSlug}`,
        canonicalUrl: `/locations/${stateSlug}/${districtSlug}/${mandalOrCitySlug}`,
        indexability: true,
        serviceAvailability: 'Direct telephone & scheduled in-person consultations'
      };
    } else if (cityData) {
      return {
        id: `${stateCode(stateSlug)}-${districtSlug}-${mandalOrCitySlug}`,
        state: stateData.name,
        district: districtData.name,
        mandal: cityData.name, // Map city to mandal for compatibility
        exactSourceName: cityData.name,
        slug: mandalOrCitySlug,
        path: `/${stateSlug}/${districtSlug}/${mandalOrCitySlug}`,
        level: 'mandal',
        parentId: `${stateCode(stateSlug)}-${districtSlug}`,
        canonicalUrl: `/locations/${stateSlug}/${districtSlug}/${mandalOrCitySlug}`,
        indexability: true,
        serviceAvailability: 'Direct telephone & local in-person consultations'
      };
    }
    return null;
  }

  // Segment 4: Village or Neighbourhood
  if (mandalData) {
    // Find matching locality name in mandal
    const matchedLocality = mandalData.localities.find(
      l => l.toLowerCase().replace(/[^a-z0-9]+/g, '-') === villageOrNeighbourhoodSlug
    ) || capitalizeSlug(villageOrNeighbourhoodSlug);

    return {
      id: `${stateCode(stateSlug)}-${districtSlug}-${mandalOrCitySlug}-${villageOrNeighbourhoodSlug}`,
      state: stateData.name,
      district: districtData.name,
      mandal: mandalData.name,
      village: matchedLocality,
      exactSourceName: matchedLocality,
      slug: villageOrNeighbourhoodSlug,
      path: `/${stateSlug}/${districtSlug}/${mandalOrCitySlug}/${villageOrNeighbourhoodSlug}`,
      level: 'village',
      parentId: `${stateCode(stateSlug)}-${districtSlug}-${mandalOrCitySlug}`,
      canonicalUrl: `/locations/${stateSlug}/${districtSlug}/${mandalOrCitySlug}/${villageOrNeighbourhoodSlug}`,
      indexability: true,
      serviceAvailability: 'Telephone consultation & scheduled regional visits'
    };
  } else if (cityData) {
    // Find matching locality in city
    const matchedNeighbourhood = cityData.localities?.find(
      l => l.toLowerCase().replace(/[^a-z0-9]+/g, '-') === villageOrNeighbourhoodSlug
    ) || capitalizeSlug(villageOrNeighbourhoodSlug);

    return {
      id: `${stateCode(stateSlug)}-${districtSlug}-${mandalOrCitySlug}-${villageOrNeighbourhoodSlug}`,
      state: stateData.name,
      district: districtData.name,
      mandal: cityData.name,
      village: matchedNeighbourhood,
      exactSourceName: matchedNeighbourhood,
      slug: villageOrNeighbourhoodSlug,
      path: `/${stateSlug}/${districtSlug}/${mandalOrCitySlug}/${villageOrNeighbourhoodSlug}`,
      level: 'village',
      parentId: `${stateCode(stateSlug)}-${districtSlug}-${mandalOrCitySlug}`,
      canonicalUrl: `/locations/${stateSlug}/${districtSlug}/${mandalOrCitySlug}/${villageOrNeighbourhoodSlug}`,
      indexability: true,
      serviceAvailability: 'Local telephone & scheduled in-person visits'
    };
  }

  return null;
};

// Helper for state code translation
function stateCode(stateSlug: string): string {
  return stateSlug === 'andhra-pradesh' ? 'ap' : stateSlug === 'telangana' ? 'tg' : stateSlug;
}

// Helper Functions
export const getLocationByPath = (path: string): AppLocation | undefined => {
  let clean = path.toLowerCase().trim();
  // Strip any leading /locations prefix (even if repeated)
  while (clean.startsWith('/locations')) {
    clean = clean.replace(/^\/locations/, '');
  }
  clean = clean.replace(/\/+$/, '') || '/';
  if (!clean.startsWith('/')) clean = '/' + clean;

  // 1. Direct match on loc.path (e.g. /andhra-pradesh/kurnool)
  const direct = locationsData.find(
    loc => loc.path.toLowerCase() === clean || `/locations${loc.path.toLowerCase()}` === clean
  );
  if (direct) return direct;

  // 2. Direct match on loc.canonicalUrl
  const canon = locationsData.find(
    loc => loc.canonicalUrl?.toLowerCase() === clean || 
           loc.canonicalUrl?.toLowerCase() === `/locations${clean}` ||
           `/locations${loc.canonicalUrl?.toLowerCase()}` === clean
  );
  if (canon) return canon;

  // 3. Match by segmented slugs
  const parts = clean.replace(/^\//, '').split('/').filter(Boolean);
  if (parts.length === 0) return undefined;

  // Check dynamic hierarchical locations from user JSON
  const dynamicLoc = getDynamicLocation(parts[0], parts[1], parts[2], parts[3]);
  if (dynamicLoc) return dynamicLoc;

  // If 1 segment: could be state slug
  if (parts.length === 1) {
    const slug = parts[0];
    const match = locationsData.find(loc => loc.slug.toLowerCase() === slug || loc.id.toLowerCase() === slug);
    if (match) return match;
  }

  // If 2 segments: [state, district] OR [district, mandal]
  if (parts.length === 2) {
    const [seg1, seg2] = parts;
    const hierarchyMatch = validateLocationHierarchy(seg1, seg2);
    if (hierarchyMatch) return hierarchyMatch;

    const district = locationsData.find(l => l.level === 'district' && l.slug.toLowerCase() === seg1);
    if (district) {
      const mandal = locationsData.find(l => l.level === 'mandal' && l.slug.toLowerCase() === seg2 && l.parentId === district.id);
      if (mandal) return mandal;
    }
  }

  // If 3 segments: [state, district, mandal] OR [district, mandal, village]
  if (parts.length === 3) {
    const [seg1, seg2, seg3] = parts;
    const hierarchyMatch = validateLocationHierarchy(seg1, seg2, seg3);
    if (hierarchyMatch) return hierarchyMatch;

    const district = locationsData.find(l => l.level === 'district' && l.slug.toLowerCase() === seg1);
    if (district) {
      const mandal = locationsData.find(l => l.level === 'mandal' && l.slug.toLowerCase() === seg2 && l.parentId === district.id);
      if (mandal) {
        const village = locationsData.find(l => l.level === 'village' && l.slug.toLowerCase() === seg3 && l.parentId === mandal.id);
        if (village) return village;
      }
    }
  }

  // If 4 segments: [state, district, mandal, village]
  if (parts.length === 4) {
    const [seg1, seg2, seg3, seg4] = parts;
    const hierarchyMatch = validateLocationHierarchy(seg1, seg2, seg3, seg4);
    if (hierarchyMatch) return hierarchyMatch;
  }

  // Fallback: match by the most specific (deepest) segment
  const deepestSlug = parts[parts.length - 1];
  const deepestMatch = locationsData.find(loc => loc.slug.toLowerCase() === deepestSlug);
  if (deepestMatch) return deepestMatch;

  return undefined;
};

export const getChildLocations = (parentId: string): AppLocation[] => {
  // Try to find if parentId exists in static list
  const staticChildren = locationsData.filter(loc => loc.parentId === parentId);
  if (staticChildren.length > 0) return staticChildren;

  // Check in rawHierarchicalLocations for dynamic children
  const parts = parentId.split('-');
  if (parts.length === 1) {
    // Parent is state (ap or tg)
    const stateSlug = parts[0] === 'ap' ? 'andhra-pradesh' : parts[0] === 'tg' ? 'telangana' : parts[0];
    const stateData = rawHierarchicalLocations[stateSlug];
    if (stateData) {
      return Object.keys(stateData.districts).map(distSlug => {
        return getDynamicLocation(stateSlug, distSlug)!;
      });
    }
  } else if (parts.length === 2) {
    // Parent is district (e.g. ap-ysr-kadapa)
    const [sCode, distSlug] = parts;
    const stateSlug = sCode === 'ap' ? 'andhra-pradesh' : sCode === 'tg' ? 'telangana' : sCode;
    const stateData = rawHierarchicalLocations[stateSlug];
    if (stateData) {
      const distData = stateData.districts[distSlug];
      if (distData) {
        const mandalChildren = Object.keys(distData.mandals || {}).map(mandalSlug => {
          return getDynamicLocation(stateSlug, distSlug, mandalSlug)!;
        });
        const cityChildren = Object.keys(distData.cities || {}).map(citySlug => {
          return getDynamicLocation(stateSlug, distSlug, citySlug)!;
        });
        return [...mandalChildren, ...cityChildren].filter(Boolean) as AppLocation[];
      }
    }
  } else if (parts.length === 3) {
    // Parent is mandal or city
    const [sCode, distSlug, mandalOrCitySlug] = parts;
    const stateSlug = sCode === 'ap' ? 'andhra-pradesh' : sCode === 'tg' ? 'telangana' : sCode;
    const stateData = rawHierarchicalLocations[stateSlug];
    if (stateData) {
      const distData = stateData.districts[distSlug];
      if (distData) {
        const mandalData = distData.mandals?.[mandalOrCitySlug];
        if (mandalData) {
          return mandalData.localities.map(locality => {
            const locSlug = locality.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return getDynamicLocation(stateSlug, distSlug, mandalOrCitySlug, locSlug)!;
          }).filter(Boolean) as AppLocation[];
        }
        const cityData = distData.cities?.[mandalOrCitySlug];
        if (cityData) {
          return cityData.localities.map(locality => {
            const locSlug = locality.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return getDynamicLocation(stateSlug, distSlug, mandalOrCitySlug, locSlug)!;
          }).filter(Boolean) as AppLocation[];
        }
      }
    }
  }

  return [];
};

export const getLocationHierarchy = (loc: AppLocation): AppLocation[] => {
  const hierarchy: AppLocation[] = [];
  let current: AppLocation | undefined = loc;
  while (current) {
    hierarchy.unshift(current);
    const parentId: string | undefined = current.parentId;
    if (parentId) {
      const parentStatic: AppLocation | undefined = locationsData.find(l => l.id === parentId);
      if (parentStatic) {
        current = parentStatic;
      } else {
        // Fallback to dynamic resolution
        const parts: string[] = parentId.split('-');
        if (parts.length === 1) {
          const stateSlug = parts[0] === 'ap' ? 'andhra-pradesh' : parts[0] === 'tg' ? 'telangana' : parts[0];
          current = getDynamicLocation(stateSlug) || undefined;
        } else if (parts.length === 2) {
          const sCode = parts[0];
          const stateSlug = sCode === 'ap' ? 'andhra-pradesh' : sCode === 'tg' ? 'telangana' : sCode;
          current = getDynamicLocation(stateSlug, parts[1]) || undefined;
        } else if (parts.length === 3) {
          const sCode = parts[0];
          const stateSlug = sCode === 'ap' ? 'andhra-pradesh' : sCode === 'tg' ? 'telangana' : sCode;
          current = getDynamicLocation(stateSlug, parts[1], parts[2]) || undefined;
        } else {
          current = undefined;
        }
      }
    } else {
      current = undefined;
    }
  }
  return hierarchy;
};

// Strict parent-child relationship validator according to Part 20 of Master Prompt
export const validateLocationHierarchy = (
  stateSlug: string,
  districtSlug?: string,
  mandalSlug?: string,
  villageSlug?: string
): AppLocation | null => {
  // Check static list first
  const staticResult = validateLocationHierarchyStatic(stateSlug, districtSlug, mandalSlug, villageSlug);
  if (staticResult) return staticResult;

  // Fallback to rawHierarchicalLocations dynamic validation
  const dyn = getDynamicLocation(stateSlug, districtSlug, mandalSlug, villageSlug);
  if (dyn) return dyn;

  return null;
};

const validateLocationHierarchyStatic = (
  stateSlug: string,
  districtSlug?: string,
  mandalSlug?: string,
  villageSlug?: string
): AppLocation | null => {
  // 1. Find State
  const stateLoc = locationsData.find(l => l.level === 'state' && l.slug === stateSlug);
  if (!stateLoc) return null;
  if (!districtSlug) return stateLoc;

  // 2. Find District belonging to stateLoc
  const districtLoc = locationsData.find(
    l => l.level === 'district' && l.slug === districtSlug && l.parentId === stateLoc.id
  );
  if (!districtLoc) return null;
  if (!mandalSlug) return districtLoc;

  // 3. Find Mandal belonging to districtLoc
  const mandalLoc = locationsData.find(
    l => l.level === 'mandal' && l.slug === mandalSlug && l.parentId === districtLoc.id
  );
  if (!mandalLoc) return null;
  if (!villageSlug) return mandalLoc;

  // 4. Find Village belonging to mandalLoc
  const villageLoc = locationsData.find(
    l => l.level === 'village' && l.slug === villageSlug && l.parentId === mandalLoc.id
  );
  if (!villageLoc) return null;

  return villageLoc;
};

export const getStates = (): AppLocation[] => {
  return locationsData.filter(l => l.level === 'state');
};

export const getDistrictsByState = (stateId: string): AppLocation[] => {
  // First get static ones
  const staticDistricts = locationsData.filter(l => l.level === 'district' && l.parentId === stateId);
  const stateSlug = stateId === 'ap' ? 'andhra-pradesh' : stateId === 'tg' ? 'telangana' : stateId;
  const stateData = rawHierarchicalLocations[stateSlug];
  if (stateData) {
    const dynDistricts = Object.keys(stateData.districts).map(distSlug => {
      return getDynamicLocation(stateSlug, distSlug)!;
    });
    // Return unified list, deduplicating by id
    const seen = new Set(staticDistricts.map(d => d.id));
    const merged = [...staticDistricts];
    dynDistricts.forEach(d => {
      if (d && !seen.has(d.id)) {
        merged.push(d);
        seen.add(d.id);
      }
    });
    return merged;
  }
  return staticDistricts;
};
