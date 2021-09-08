zips = ['19147',
'19140',
'19123',
'19106',
'19146',
'19134',
'19104',
'19102',
'19428',
'19020',
'19053',
'19115',
'19001',
'19116',
'19130']

var empname=['Tim']

snames=['Morris Animal Refuge',
'ACCT',
'Women\'s Animal Center',
'Street Tails Animal Rescue',
'PAWS Adoption Center',
'Saved Me Adoption Center',
'PAWS',
'PAWS Spay/Neuter and Wellness Clinic',
'Pennsylvania SPCA',
'Society For Prevention-Cruelty',
'Pennsylvania SPCA Wellness Clinic',
'Ariel\'s Angels Pet Food Pantry & Rescue',
'Pet Rehoming Network Philadelphia',
'Montgomery County SPCA',
'CATS Bridge to Rescue',
'PAWS Northeast Adoption Center & Spay/Neuter and Wellness Clinic',
'Montgomery County SPCA',
'Wet Nose Rescue',
'Le Cat Cafe']

shelters= {
    '19147': [{'name': 'Morris Animal Refuge',
      'address':'1242 Lombard St, Philadelphia, PA 19147',
      'phone':'(215) 735-9570',
      'website':'https://www.morrisanimalrefuge.org/',
      'directions': 'https://www.google.com/maps/dir//animal+shelters+in+philadelphia/@39.9543331,-75.1945562,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6c624795ccd53:0xe62d0c783e3f56ee!2m2!1d-75.1627492!2d39.944266'
    }],
  
    '19020':[{'name':'Women\'s Animal Center',
    'address':'3839 Richlieu Rd, Bensalem, PA 19020',
    'phone':'(215) 750-5252',
    'website':'http://womensanimalcenter.org/',
    'directions': 'https://www.google.com/maps/dir//Women\'s+Animal+Center,+3839+Richlieu+Rd,+Bensalem,+PA+19020/@40.0437955,-75.2029942,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c14d5f10cd4391:0x7a42d6bf7020b72d!2m2!1d-74.9487238!2d40.1287803'}],
  
  
      '19140':[{'name':'ACCT',
              'address':'111 W Hunting Park Ave, Philadelphia, PA 19140',
              'phone':'(267) 385-3800',
              'website':'http://www.acctphilly.org/',
              'directions': 'https://www.google.com/search?hl=en&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2&tbm=lcl&q=animal%20shelters%20in%20philadelphia&rflfq=1&num=10&sa=X&ved=2ahUKEwimjdmTmb_yAhWQXM0KHZMAApoQjGp6BAggEHg&biw=1680&bih=971&rlst=f#'}],
              
              
  
  
    '19123':[{'name':'Street Tails Animal Rescue',
    'address':'1030 N 2nd St #401, Philadelphia, PA 19123',
    'phone':'(267) 761-9434',
    'website':'https://www.streettails.org/',
    'directions': 'https://www.google.com/maps/dir//Street+Tails+Animal+Rescue,+1030+N+2nd+St+%23401,+Philadelphia,+PA+19123/@39.9588567,-75.1988344,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6c86f9c25461b:0x8c5119d0eba1a53f!2m2!1d-75.1407876!2d39.9672234'}],
  
    '19106':[{'name':'PAWS Adoption Center',
              'address':'100 N 2nd St, Philadelphia, PA 19106',
              'phone':'(215) 238-9901',
              'website':'http://www.phillypaws.org/',
              'directions': 'https://www.google.com/maps/dir//PAWS+Adoption+Center,+100+N+2nd+St,+Philadelphia,+PA+19106/@39.9548946,-75.2021921,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6c8860500c2bd:0x83db242a98de7b7!2m2!1d-75.1433661!2d39.9520741'}],
  
              '19146':[{'name':'Saved Me Adoption Center',
              'address':'2609 Federal St floor 1, Philadelphia, PA 19146',
              'phone':'(215) 240-1240',
              'website':'http://www.savedme.org/',
              'directions': 'https://www.google.com/maps/dir//animal+shelters+in+philadelphia/@39.9468702,-75.1967752,15z/data=!3m1!5s0x89c6c668e59908c3:0xce3014aa54812f95!4m8!4m7!1m0!1m5!1m1!1s0x89c6c8652c5a1cd3:0x458aabf7e1295fdf!2m2!1d-75.1872539!2d39.9388785'},
            
              {'name':'PAWS',
              'address':'2900 Grays Ferry Ave, Philadelphia, PA 19146',
              'phone':'(215) 298-9680',
              'website':'https://phillypaws.org/',
              'directions': 'https://www.google.com/maps/dir//PAWS,+2900+Grays+Ferry+Ave,+Philadelphia,+PA+19146/@39.9466398,-75.1995877,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6c666623cff73:0xf1567317d83fb711!2m2!1d-75.1926492!2d39.9388139'},
  
              {'name':'PAWS Spay/Neuter and Wellness Clinic',
              'address':'2900 Grays Ferry Ave, Philadelphia, PA 19146',
              'phone':'(215) 298-9680',
              'website':'http://www.phillypaws.org/',
              'directions': 'https://www.google.com/maps/dir//PAWS+Spay%2FNeuter+and+Wellness+Clinic,+2900+Grays+Ferry+Ave,+Philadelphia,+PA+19146/@39.9466517,-75.1995877,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6c66642a36247:0x3d5e3946e55bc98c!2m2!1d-75.1927115!2d39.9388139'}
  
            ],
              
              
              '19134':[{'name':'Pennsylvania SPCA',
              'address':'350 E Erie Ave, Philadelphia, PA 19134',
              'phone':'(215) 426-6300',
              'website':'http://www.pspca.org/',
              'directions': 'https://www.google.com/maps/dir//Pennsylvania+SPCA,+350+E+Erie+Ave,+Philadelphia,+PA+19134/@39.9865362,-75.2328117,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6b7c5a735b39d:0xe22b9bdd0251b20f!2m2!1d-75.1212044!2d40.006699'},
            
              {'name':'Society For Prevention-Cruelty',
              'address':'350 E Erie Ave, Philadelphia, PA 19134',
              'phone':'(215) 426-6301',
              'website':'https://www.pspca.org/locations/headquarters',
              'directions': 'https://www.google.com/maps/dir//Society+For+Prevention-Cruelty,+350+E+Erie+Ave,+Philadelphia,+PA+19134/@39.9851268,-75.2306534,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6b7c5acce4aef:0x38279ea337ded250!2m2!1d-75.1212156!2d40.0067005'},
  
              {'name':'Pennsylvania SPCA Wellness Clinic',
              'address':'350 E Erie Ave, Philadelphia, PA 19134',
              'phone':'(215) 426-6300',
              'website':'http://pspca.org/',
              'directions': 'https://www.google.com/maps/dir//Pennsylvania+SPCA+Wellness+Clinic,+350+E+Erie+Ave,+Philadelphia,+PA+19134/@39.9851268,-75.2306534,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6b7991d5a8e1f:0x883b5e04deee35cd!2m2!1d-75.1212035!2d40.0066989'}
            ],
  
  
              '19104':[{'name':'Ariel\'s Angels Pet Food Pantry & Rescue',
              'address':'33rd Hamilton St, Philadelphia, PA 19104',
              'phone':'(267) 581-4955',
              'website':'https://www.nokillnetwork.org/d/Pennsylvania/Ariel\'s-Angels-Pet-Food-Pantry-&-Rescue-(Philadelphia)~1960/',
              'directions': 'https://www.google.com/maps/dir//animal+shelters+in+philadelphia/@39.9567356,-75.1901308,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6c7ddb5881517:0x63dfadc115d12fb7!2m2!1d-75.1901484!2d39.9612423'}],
            
            
              '19102':[{'name':'Pet Rehoming Network Philadelphia',
              'address':'1500 Market Street, Philadelphia, PA 19102',
              'phone':'(888) 720-3322',
              'website':'https://pet-net.net/',
              'directions': 'https://www.google.com/maps/dir//Pet+Rehoming+Network+Philadelphia,+Philadelphia,+PA+19102/@39.9538342,-75.1949561,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6c73312ff16db:0x873f255b471d17e4!2m2!1d-75.1663953!2d39.9523056'}],
  
            
            
              '19428':[{'name':'Montgomery County SPCA',
              'address':'19 E Ridge Pike, Conshohocken, PA 19428',
              'phone':'(610) 825-0111',
              'website':'http://www.montgomerycountyspca.org/',
              'directions': 'https://www.google.com/maps/dir//Montgomery+County+SPCA,+19+E+Ridge+Pike,+Conshohocken,+PA+19428/@40.0247508,-75.3122073,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6be82ebdc6f7d:0x8f2022692515906c!2m2!1d-75.2841079!2d40.0942398'}],
  
            
  
              '19053':[{'name':'CATS Bridge to Rescue',
            'address':'2820 Old Lincoln Hwy #4, Feasterville-Trevose, PA 19053',
          'phone':'(215) 987-8961',
        'website':'https://catsbridge.org/',
      'directions':'https://www.google.com/maps/dir//CATS+Bridge+to+Rescue,+2820+Old+Lincoln+Hwy+%234,+Feasterville-Trevose,+PA+19053/@40.0393169,-75.2243586,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6b2aedc0ae299:0xa267a46017c85555!2m2!1d-74.9762549!2d40.1291158'}],
            
       '19115':[{'name':'PAWS Northeast Adoption Center & Spay/Neuter and Wellness Clinic',
                  'address':'1810 Grant Ave, Philadelphia, PA 19115',
                'phone':'(215) 545-9600',
              'website':'https://phillypaws.org/locations/paws-northeast-adoption-center-low-cost-clinic/',
            'directions':'https://www.google.com/maps/dir//PAWS+Northeast+Adoption+Center+%26+Spay%2FNeuter+and+Wellness+Clinic,+1810+Grant+Ave,+Philadelphia,+PA+19115/@40.0182644,-75.2353099,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6b3bf904f431f:0x8bc800c90553b99d!2m2!1d-75.0370907!2d40.0851397'}],
  
            '19001':[{'name':'Montgomery County SPCA',
                  'address':'1006 Edge Hill Rd, Abington, PA 19001',
                'phone':'(215) 886-8802',
              'website':'http://www.montgomerycountyspca.org/',
            'directions':'https://www.google.com/maps/dir//Montgomery+County+SPCA,+1006+Edge+Hill+Rd,+Abington,+PA+19001/@40.0354164,-75.238891,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6b06198ae592d:0xc38e1b3b1f112620!2m2!1d-75.1358524!2d40.1182506'}],
  
            '19116':[{'name':'Wet Nose Rescue',
                  'address':'14425 Bustleton Ave, Philadelphia, PA 19116',
                'phone':'(267) 684-6187',
              'website':'http://wetnoserescue.org/',
            'directions':'https://www.google.com/maps/dir//Wet+Nose+Rescue,+14425+Bustleton+Ave,+Philadelphia,+PA+19116/@40.040918,-75.2159929,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6b28659f72069:0xf1edeba7a7b411f6!2m2!1d-75.0109092!2d40.1323041'}],
  
            '19130':[{'name':'Le Cat Cafe',
                  'address':'2713 W Girard Ave, Philadelphia, PA 19130',
                'phone':'(267) 800-7877',
              'website':'http://lecatcafe.org/',
            'directions':'https://www.google.com/maps/dir//animal+shelters+in+philadelphia/@39.9642997,-75.1931083,15z/data=!3m1!5s0x89c6c7b902248f97:0x4ea696f149e70743!4m8!4m7!1m0!1m5!1m1!1s0x89c6c7b90241936f:0xc0927595f03f4dd0!2m2!1d-75.1809126!2d39.9743564'}]
    }

czips=['19103',
    '19104',
    '19106',
    '19114',
    '19115',
    '19118',
    '19119',
    '19120',
    '19123',
    '19125',
    '19126',
    '19127',
    '19130',
    '19134',
    '19135',
    '19136',
    '19138',
    '19142',
    '19144',
    '19145',
    '19146',
    '19147',
    '19148',
    '19152',
    '19154']
clzips=['19103',
    '19104',
    '19106',
    '19114',
    '19115',
    '19118',
    '19119',
    '19120',
    '19123',
    '19125',
    '19126',
    '19127',
    '19130',
    '19134',
    '19135',
    '19136',
    '19138',
    '19142',
    '19144',
    '19145',
    '19146',
    '19147',
    '19148',
    '19152',
    '19154']

clinics= {'19130': [{'name': 'Girard Veterinary Clinic',
    'address': '2806 W Girard Ave, Philadelphia, PA 19130',
    'phone': '(215) 232-0831',
    'website': 'http://www.girardvetclinic.com/',
    'location': {'latitude': 39.974186599999996, 'longitude': -75.1822621}},
    {'name': 'Art City Vets & Urgent Care',
    'address': 'Condo, 2001 Hamilton St #1, Philadelphia, PA 19130',
    'phone': '(215) 563-8387',
    'website': 'https://artcityvets.com/',
    'location': {'latitude': 39.962583699999996,
     'longitude': -75.17226409999999}},
    {'name': 'Fairmount Animal Hospital',
    'address': '2315 Fairmount Ave, Philadelphia, PA 19130',
    'phone': '(215) 684-1439',
    'website': 'http://www.vetsreviews.com/',
    'location': {'latitude': 39.967517699999995, 'longitude': -75.1759033}},
    {'name': 'Art Museum Veterinary Center',
    'address': '1710 Fairmount Ave, Philadelphia, PA 19130',
    'phone': '(215) 982-1490',
    'website': 'http://artmuseumvet.com/',
    'location': {'latitude': 39.9669702, 'longitude': -75.16580789999999}},
    {'name': 'The Cat Doctor',
    'address': '535 N 22nd St, Philadelphia, PA 19130',
    'phone': '(215) 561-7668',
    'website': 'http://thecatdr.com/',
    'location': {'latitude': 39.9648537, 'longitude': -75.17416}}],
    '19148': [{'name': 'Pet Vet Clinic On Passyunk',
    'address': '1602 E Passyunk Ave, Philadelphia, PA 19148',
    'phone': '(215) 271-2800',
    'website': 'http://www.doctorted.net/',
    'location': {'latitude': 39.9297512, 'longitude': -75.1638279}}],
    '19106': [{'name': 'Center City Veterinary Hospital',
    'address': '37 S 3rd St, Philadelphia, PA 19106',
    'phone': '(215) 923-2284',
    'website': 'http://www.centercityvet.com/',
    'location': {'latitude': 39.9491047, 'longitude': -75.14571889999999}}],
    '19123': [{'name': '2nd Street Animal Hospital',
    'address': '966 N 2nd St, Philadelphia, PA 19123',
    'phone': '(215) 516-7000',
    'website': 'https://www.2ndstreetvet.com/',
    'location': {'latitude': 39.965899199999996, 'longitude': -75.1405716}},
    {'name': 'Indy Veterinary Care',
    'address': '917 N Front St, Philadelphia, PA 19123',
    'phone': '(215) 923-2300',
    'website': 'https://indyvetcare.com/',
    'location': {'latitude': 39.963310199999995, 'longitude': -75.1378402}},
    {'name': 'IndeVets',
    'address': '990 Spring Garden St Suite 402, Philadelphia, PA 19123',
    'phone': '(833) 463-3838',
    'website': 'http://indevets.com/',
    'location': {'latitude': 39.9614572, 'longitude': -75.1541475}}],
    '19147': [{'name': 'BluePearl Pet Hospital',
    'address': '1114 S Front St, Philadelphia, PA 19147',
    'phone': '(267) 800-1950',
    'website': 'https://bluepearlvet.com/hospital/philadelphia-pa/',
    'location': {'latitude': 39.9320008, 'longitude': -75.146352}},
    {'name': 'Society Hill Veterinary Hospital',
    'address': '501 S 2nd St, Philadelphia, PA 19147',
    'phone': '(215) 627-5955',
    'website': 'http://www.societyhillvets.com/',
    'location': {'latitude': 39.941977, 'longitude': -75.145155}},
    {'name': 'Queen Village Animal Hospital',
    'address': '323 Bainbridge St, Philadelphia, PA 19147',
    'phone': '(215) 925-5753',
    'website': 'http://www.queenvillageah.com/',
    'location': {'latitude': 39.9407698, 'longitude': -75.1485494}},
    {'name': 'Companion Pet Hospital',
    'address': '1524 S 5th St, Philadelphia, PA 19147',
    'phone': '(215) 703-7387',
    'website': 'http://www.companion-pets.com/',
    'location': {'latitude': 39.9290856, 'longitude': -75.1537724}},
    {'name': 'Pet Health Center',
    'address': '1114 S Front St, Philadelphia, PA 19147',
    'phone': '(267) 800-1950',
    'website': 'http://www.phillypethealthcenter.com/about-us.html',
    'location': {'latitude': 39.9320008, 'longitude': -75.146352}}],
    '19114': [{'name': 'Caring Hands Veterinary Clinic',
    'address': '3310 Grant Ave, Philadelphia, PA 19114',
    'phone': '(215) 621-8959',
    'website': 'https://www.caringhandsvetclinic.com/',
    'location': {'latitude': 40.0679285, 'longitude': -75.0071798}},
    {'name': 'Compassion Veterinary Clinic',
    'address': '9324 State Rd., Philadelphia, PA 19114',
    'phone': '(215) 637-2902',
    'website': 'http://www.compassionvetclinic.com/',
    'location': {'latitude': 40.0479822, 'longitude': -74.9918118}},
    {'name': 'Petco Vaccination Clinic',
    'address': '9717 Roosevelt Blvd, Philadelphia, PA 19114',
    'phone': '(215) 671-9601',
    'website': 'https://stores.petco.com/pa/philadelphia/vaccinations-philadelphia-pa-1768.html?cm_mmc=GMAPSPET-_-GMB-_-SVC-_-VTC-_-VTC-_-AQU-_-NA-_-SVC_GMB_Evergreen_VetcoClinics_PA_Philadelphia_1768-_-GMB-_-VacGMB',
    'location': {'latitude': 40.0815377, 'longitude': -75.0263406}}],
    '19127': [{'name': 'The Animedic Veterinary Hospital',
    'address': '102 Jamestown Ave., Philadelphia, PA 19127',
    'phone': '(267) 297-7950',
    'website': 'http://www.theanimedic.com/',
    'location': {'latitude': 40.023267, 'longitude': -75.219122}},
    {'name': 'Caring For Cats',
    'address': '100 Leverington Ave #1, Philadelphia, PA 19127',
    'phone': '(215) 509-6060',
    'website': 'http://www.caringforcatsphilly.com/',
    'location': {'latitude': 40.0291856, 'longitude': -75.23048279999999}}],
    '19154': [{'name': 'Dutton Road Veterinary Clinic',
    'address': '10901 Dutton Rd, Philadelphia, PA 19154',
    'phone': '(215) 331-2968',
    'website': 'http://www.duttonroadvetclinic.com/',
    'location': {'latitude': 40.0874429, 'longitude': -74.99053049999999}},
    {'name': 'VCA Knightswood Animal Hospital',
    'address': '12121 Knights Rd, Philadelphia, PA 19154',
    'phone': '(215) 632-2525',
    'website': 'https://vcahospitals.com/knightswood?utm_source=maps&utm_medium=organic&utm_campaign=VCA_Knightswood_Animal_Hospital',
    'location': {'latitude': 40.087835999999996, 'longitude': -74.970201}},
    {'name': 'Rubin Deborah F DVM',
    'address': '12121 Knights Rd, Philadelphia, PA 19154',
    'phone': '(215) 632-2525',
    'website': 'http://www.vcahospitals.com/knightswood',
    'location': {'latitude': 40.087821, 'longitude': -74.97018}}],
    '19146': [{'name': 'World of Animals at Rittenhouse',
    'address': '408 S 20th St, Philadelphia, PA 19146',
    'phone': '(215) 732-7321',
    'website': 'http://www.vetcentercity.com/',
    'location': {'latitude': 39.946521, 'longitude': -75.174864}},
    {'name': 'Washington Ave Animal Hospital',
    'address': '1920 Washington Ave, Philadelphia, PA 19146',
    'phone': '(267) 927-4838',
    'website': 'http://washingtonavevet.com/',
    'location': {'latitude': 39.938708, 'longitude': -75.175651}},
    {'name': 'PAWS Spay/Neuter and Wellness Clinic',
    'address': '2900 Grays Ferry Ave, Philadelphia, PA 19146',
    'phone': '(215) 298-9680',
    'website': 'http://www.phillypaws.org/',
    'location': {'latitude': 39.9388291, 'longitude': -75.1927082}},
    {'name': 'Mc Kinstry Elizabeth R DVM',
    'address': '2210 South St, Philadelphia, PA 19146',
    'phone': '(215) 545-2287',
    'location': {'latitude': 39.945147, 'longitude': -75.179041}},
    {'name': 'City Cat Vets',
    'address': '2210 South St, Philadelphia, PA 19146',
    'phone': '(215) 545-2287',
    'website': 'http://citycatvets.com/',
    'location': {'latitude': 39.9451495, 'longitude': -75.1790511}}],
    '19120': [{'name': 'Emancipet',
    'address': '575 Adams Ave Unit 2, Philadelphia, PA 19120',
    'phone': '(267) 774-4901',
    'website': 'https://emancipet.org/philadelphia/',
    'location': {'latitude': 40.0363033, 'longitude': -75.1076052}},
    {'name': 'Northeast Animal Clinic',
    'address': '4956 Rising Sun Ave, Philadelphia, PA 19120',
    'phone': '(215) 457-7711',
    'location': {'latitude': 40.026629199999995, 'longitude': -75.1216314}}],
    '19125': [{'name': 'Fishtown Animal Hospital',
    'address': '233 E Girard Ave, Philadelphia, PA 19125',
    'phone': '(215) 834-6993',
    'website': 'http://www.thefishtownanimalhospital.com/',
    'location': {'latitude': 39.9696018, 'longitude': -75.1328224}}],
    '19145': [{'name': 'Animal Medical Clinic',
    'address': '2910 S 18th St, Philadelphia, PA 19145',
    'phone': '(215) 463-1877',
    'location': {'latitude': 39.914637899999995, 'longitude': -75.177492}},
    {'name': 'Simmons Animal Hospital',
    'address': '1500 Wolf St, Philadelphia, PA 19145',
    'phone': '(215) 468-2814',
    'location': {'latitude': 39.9219647, 'longitude': -75.1720862}}],
    '19136': [{'name': "Bree's Animal Hospital",
    'address': '7436 Frankford Ave, Philadelphia, PA 19136',
    'phone': '(215) 338-3219',
    'website': 'http://breesanimalhospital.com/',
    'location': {'latitude': 40.038587299999996,
     'longitude': -75.03657179999999}},
    {'name': "Noah's Ark Animal Hospital",
    'address': '7414 Frankford Ave, Philadelphia, PA 19136',
    'phone': '(215) 624-7766',
    'website': 'http://noahsarkanimalhospitalphiladelphia.com/',
    'location': {'latitude': 40.0382511, 'longitude': -75.0375249}},
    {'name': 'Elite Philadelphia Vets',
    'address': '7365 Milnor St, Philadelphia, PA 19136',
    'phone': '(267) 857-2942',
    'website': 'https://heaven-4ur-pet.com/areas-served/pennsylvania/philadelphia/',
    'location': {'latitude': 40.024507, 'longitude': -75.027609}},
    {'name': 'Dr. Conrad Roblejo',
    'address': '7436 Frankford Ave, Philadelphia, PA 19136',
    'phone': '(215) 338-3219',
    'website': 'http://breesanimalhospital.com/',
    'location': {'latitude': 40.038588, 'longitude': -75.0365719}}],
    '19115': [{'name': 'Boulevard Animal Hospital',
    'address': '1913 Grant Ave, Philadelphia, PA 19115',
    'phone': '(215) 969-1050',
    'website': 'http://theboulevardanimalhospital.com/',
    'location': {'latitude': 40.084359899999995,
     'longitude': -75.03462259999999}},
    {'name': 'PAWS Northeast Adoption Center & Spay/Neuter and Wellness Clinic',
    'address': '1810 Grant Ave, Philadelphia, PA 19115',
    'phone': '(215) 545-9600',
    'website': 'https://phillypaws.org/locations/paws-northeast-adoption-center-low-cost-clinic/',
    'location': {'latitude': 40.0851026, 'longitude': -75.0371234}}],
    '19134': [{'name': 'Pet Health Center',
    'address': '3365 Frankford Ave, Philadelphia, PA 19134',
    'phone': '(215) 739-6401',
    'website': 'http://phillypethealthcenter.com/',
    'location': {'latitude': 39.99485, 'longitude': -75.1060849}},
    {'name': 'Pennsylvania SPCA Wellness Clinic',
    'address': '350 E Erie Ave, Philadelphia, PA 19134',
    'phone': '(215) 426-6300',
    'website': 'http://pspca.org/',
    'location': {'latitude': 40.0063678, 'longitude': -75.1212441}},
    {'name': 'Petco Vaccination Clinic',
    'address': '3300 Aramingo Ave, Philadelphia, PA 19134',
    'phone': '(215) 423-4414',
    'website': 'https://stores.petco.com/pa/philadelphia/vaccinations-philadelphia-pa-290.html?cm_mmc=GMAPSPET-_-GMB-_-SVC-_-VTC-_-VTC-_-AQU-_-NA-_-SVC_GMB_Evergreen_VetcoClinics_PA_Philadelphia_290-_-GMB-_-VacGMB',
    'location': {'latitude': 39.9906429, 'longitude': -75.1029978}}],
    '19103': [{'name': 'Liberty Vet Pets',
    'address': '265 S 20th St, Philadelphia, PA 19103',
    'phone': '(888) 458-8587',
    'website': 'http://www.libertyvetpets.com/',
    'location': {'latitude': 39.9484516, 'longitude': -75.1741687}},
    {'name': 'VCA Cat Hospital of Philadelphia',
    'address': '226 S 20th St, Philadelphia, PA 19103',
    'phone': '(215) 567-6446',
    'website': 'https://vcahospitals.com/cat-hospital-of-philadelphia?utm_source=maps&utm_medium=organic&utm_campaign=VCA_Cat_Hospital_of_Philadelphia',
    'location': {'latitude': 39.949808999999995, 'longitude': -75.174162}}],
    '19144': [{'name': 'Animedic Veterinary Clinic',
    'address': '7110 Germantown Ave, Philadelphia, PA 19144',
    'phone': '(267) 748-2848',
    'website': 'https://animedicatmtairy.com/contact/',
    'location': {'latitude': 40.0584996, 'longitude': -75.18984259999999}}],
    '19135': [{'name': 'World of Animals at Mayfair Veterinary Hospital',
    'address': '6503 Frankford Ave, Philadelphia, PA 19135',
    'phone': '(215) 624-8433',
    'website': 'http://veterinariannephiladelphia.com/',
    'location': {'latitude': 40.029415, 'longitude': -75.0558662}}],
    '19104': [{'name': "O'Neal Joseph M DVM",
    'address': '4424 Market St, Philadelphia, PA 19104',
    'phone': '(215) 386-3294',
    'website': 'https://onealanimalhospital.com/',
    'location': {'latitude': 39.9579388, 'longitude': -75.2104315}},
    {'name': 'Ryan Veterinary Hospital',
    'address': '3900 Spruce St, Philadelphia, PA 19104',
    'phone': '(215) 746-8387',
    'website': 'http://www.vet.upenn.edu/veterinary-hospitals/ryan-veterinary-hospital',
    'location': {'latitude': 39.9507583, 'longitude': -75.20106539999999}},
    {'name': 'University of Pennsylvania Veterinary Hospital Emergency Wing',
    'address': '3900 Delancey St, Philadelphia, PA 19104',
    'phone': '(215) 898-4685',
    'website': 'https://www.vet.upenn.edu/veterinary-hospitals/ryan-veterinary-hospital/emergencies',
    'location': {'latitude': 39.951278099999996, 'longitude': -75.2010098}}],
    '19119': [{'name': 'Mt Airy Animal Hospital',
    'address': '114 E Mt Airy Ave, Philadelphia, PA 19119',
    'phone': '(215) 248-1886',
    'website': 'http://www.mtairyvet.com/',
    'location': {'latitude': 40.0612827, 'longitude': -75.1893267}},
    {'name': 'Jones Jennifer VMD',
    'address': '7110 Germantown Ave, Philadelphia, PA 19119',
    'phone': '(267) 748-2848',
    'website': 'http://www.mtairyvet.com/',
    'location': {'latitude': 40.0584996, 'longitude': -75.18984259999999}}],
    '19118': [{'name': 'Chestnut Hill Cat Clinic',
    'address': '8220 Germantown Ave, Philadelphia, PA 19118',
    'phone': '(215) 247-9560',
    'website': 'http://www.chestnuthillcatclinic.com/',
    'location': {'latitude': 40.0736815, 'longitude': -75.2032582}}],
    '19142': [{'name': 'Elmwood Central Animal Hospital',
    'address': '6206 Elmwood Ave, Philadelphia, PA 19142',
    'phone': '(215) 724-8808',
    'location': {'latitude': 39.924678799999995, 'longitude': -75.2264227}}],
    '19126': [{'name': 'Cheltenham Animal Hospital',
    'address': '1728 W Cheltenham Ave, Philadelphia, PA 19126',
    'phone': '(215) 927-2630',
    'location': {'latitude': 40.066285, 'longitude': -75.1448356}}],
    '19138': [{'name': 'Wyncote Animal Hospital',
    'address': '6701 Wyncote Ave, Philadelphia, PA 19138',
    'phone': '(215) 224-2764',
    'website': 'http://www.wyncoteanimalhospital.com/',
    'location': {'latitude': 40.0564913, 'longitude': -75.1520082}}],
    '19152': [{'name': 'Denish Adam DVM',
    'address': '7905 Bustleton Ave, Philadelphia, PA 19152',
    'phone': '(215) 883-8286',
    'website': 'https://www.rhawnhurstvet.com/meet-our-team/',
    'location': {'latitude': 40.0568968, 'longitude': -75.0528475}}]}
cnames=['Girard Veterinary Clinic',
'Art City Vets & Urgent Care',
'Fairmount Animal Hospital',
'Art Museum Veterinary Center',
'The Cat Doctor',
'Pet Vet Clinic On Passyunk',
'Center City Veterinary Hospital',
'2nd Street Animal Hospital',
'Indy Veterinary Care',
'IndeVets',
'BluePearl Pet Hospital',
'Society Hill Veterinary Hospital',
'Queen Village Animal Hospital',
'Companion Pet Hospital',
'Pet Health Center',
'Caring Hands Veterinary Clinic',
'Compassion Veterinary Clinic',
'Petco Vaccination Clinic',
'The Animedic Veterinary Hospital',
'Caring For Cats',
'Dutton Road Veterinary Clinic',
'VCA Knightswood Animal Hospital',
'Rubin Deborah F DVM',
'World of Animals at Rittenhouse',
'Washington Ave Animal Hospital',
'PAWS Spay/Neuter and Wellness Clinic',
'Mc Kinstry Elizabeth R DVM',
'City Cat Vets',
'Emancipet',
'Northeast Animal Clinic',
'Fishtown Animal Hospital',
'Animal Medical Clinic',
'Simmons Animal Hospital',
"Bree's Animal Hospital",
"Noah's Ark Animal Hospital",
'Elite Philadelphia Vets',
'Dr. Conrad Roblejo',
'Boulevard Animal Hospital',
'PAWS Northeast Adoption Center & Spay/Neuter and Wellness Clinic',
'Pet Health Center',
'Pennsylvania SPCA Wellness Clinic',
'Petco Vaccination Clinic',
'Liberty Vet Pets',
'VCA Cat Hospital of Philadelphia',
'Animedic Veterinary Clinic',
'World of Animals at Mayfair Veterinary Hospital',
"O'Neal Joseph M DVM",
'Ryan Veterinary Hospital',
'University of Pennsylvania Veterinary Hospital Emergency Wing',
'Mt Airy Animal Hospital',
'Jones Jennifer VMD',
'Chestnut Hill Cat Clinic',
'Elmwood Central Animal Hospital',
'Cheltenham Animal Hospital',
'Wyncote Animal Hospital',
'Denish Adam DVM']

https://www.google.com/maps/search/?api=1&query=,-75.0528475

var API = (() => {
    var elogin = () => {

        function hasKeySetTo(obj,key,value)
        {
            return obj.hasOwnProperty(key) && obj[key]==value;
        }

      var users= {
        'admin':'admin_a',
        'serpe.boyer@drexel.edu': 'boyer_serpe',
        'heather.cuthbert@drexel.edu':'cuthbert_heather',
        'elmira.garafieva@drexel.edu':'garafieva_elmira',
        'alexandra.marie.genia@drexel.edu':'genia_allie',
        'gabrielle.jaeske@drexel.edu': 'jaeske_gabrielle',
        'taylore.latham@drexel.edu':'latham_taylore',
        'matthew.lipovac@drexel.edu':'lipovac_matthew',
        'adrienne.kirincich.little@drexel.edu':'little_adrienne',
        'ridhi.mehta@drexel.edu':'mehta_ridhi',
        'ahmed.nassar@drexel.edu':'nassar_ahmed',
        'bledar.noka@drexel.edu':'noka_bledar',
        'blediana.noka@drexel.edu':'noka_blediana',
        'skye.poole@drexel.edu':'poole_skye',
        'rebecca.roman@drexel.edu':'roman_rebecca',
        'annie.stauffer@drexel.edu':'stauffer_annie',
        'manoj.venkatachalaiah@drexel.edu':'venkatachalaiah_manoj',
        'kelly.boyle@drexel.edu':'boyle_kelly',
        'timothy.john.gorichanaz@drexel.edu':'gorichanaz_timothy'
        
    }
        
      var username=document.getElementById("user").value.replaceAll(" ", "");

      var password=document.getElementById("password").value.replaceAll(" ", "");
      
      var en=password.split(" ")[0].split('_')[1]+' '+password.split(" ")[0].split('_')[0];
      localStorage.setItem("storageName",en);


      if (username.length==0 && password.length==0)
      {
          alert("Please enter username and password")
          return false;
      }

      if (username.length==0)
      {
        alert("Please enter your username");
        return false;
      }

      if (password.length==0)
      {
        alert("Please enter your password");
        return false;
      }

      
      else {

        document.getElementById("user").value = '';
        document.getElementById("password").value = '';

          try {
            
            if (hasKeySetTo(users,username,password))
            {
              window.location = "../pages/login.html";
            }

            else{
                alert("invalid username or password")
            }
            
          } catch(e) {
              console.log(e);
              console.log('-------------------------');
          }

          
          return false;
        }
      }
      
      var shells = () => {
        content='';
        document.getElementById("filter").style.visibility="visible";
        num=0
        for(i=0;i<zips.length;i++){
          for (j=0;j< shelters[zips[i]].length;j++){
            num++
            content=content+ '<b>'+ num +'. '+ shelters[zips[i]][j]['name']+
            '</b><br>address: '+shelters[zips[i]][j]['address']+ '<br>phone: '+  
            shelters[zips[i]][j]['phone']  +'<br>'+ '<a href='+ 
            shelters[zips[i]][j]['website']+'>'+'&#127758 Website</a>'+
            '<br><a href='+ shelters[zips[i]][j]['directions']+'>'+'&#10137 Directions</a>'+
            '<br><br>'
          }
        }
  
        document.getElementById("shellresults").innerHTML=content;
        
        return false;
        
  
    }

    var clins = () => {
        content='';
        document.getElementById("filter").style.visibility="visible";

        num=0
        for(i=0;i<clzips.length;i++){
          for (j=0;j< clinics[clzips[i]].length;j++){
            num++
            content=content+ '<b>'+ num +'. '+ clinics[clzips[i]][j]['name']+
            '</b><br>address: '+clinics[clzips[i]][j]['address']+ '<br>phone: '+  
            clinics[clzips[i]][j]['phone']  +'<br>'+ '<a href='+ 
            clinics[clzips[i]][j]['website']+'>'+'&#127758 Website</a>'+'<br><a href="https://www.google.com/maps/search/?api=1&query="+clinics[clzips[i]][j]["location"]["latitiude"]+","+clinics[clzips[i]][j]["location"]["longitude"]">Location</a>'
             
            '<br><br>'
          }
        }
    
        document.getElementById("shellresults1").innerHTML=content;
        
        return false;
        
    
    }

    var fillsh = () => {
      
        zipfill=document.getElementById("shells").value;

        document.getElementById("shells").value=''
        
        content='<b>Showing results containing '+'"'+zipfill+'":</b><br><br>';
        var num=0;
        for(i=0;i<zips.length;i++){
            for (j=0;j< shelters[zips[i]].length;j++){
            if(shelters[zips[i]][j]['name'].toUpperCase().includes(zipfill.toUpperCase())){
              num++
              content=content+ '<b>'+ num +'. '+ shelters[zips[i]][j]['name']+
              '</b><br>address: '+shelters[zips[i]][j]['address']+ '<br>phone: '+  
              shelters[zips[i]][j]['phone']  +'<br>'+ '<a href='+ 
              shelters[zips[i]][j]['website']+'>'+'&#127758 Website</a>'+
              '<br><a href='+ shelters[zips[i]][j]['directions']+'>'+'&#10137 Directions</a>'+
              '<br><br>'
            }
        }
          }
          document.getElementById("shells").value='';
        document.getElementById("shellresults").innerHTML=content;
    
    
    
      document.getElementById("filter").style.visibility="hidden";

    
       
        
          
          return false; 
    
    }

    var fillcl = () => {
      
        zipfill=document.getElementById("cls").value;
        document.getElementById("cls").value=''
        document.getElementById("filter").style.visibility="hidden";

        
        content='<b>Showing results containing '+'"'+zipfill+'"</b><br><br>';
        var num=0;
        for(i=0;i<czips.length;i++){
            for (j=0;j< clinics[czips[i]].length;j++){
            if(clinics[czips[i]][j]['name'].toUpperCase().includes(zipfill.toUpperCase())){
              num++
              content=content+ '<b>'+ num +'. '+ clinics[czips[i]][j]['name']+
              '</b><br>address: '+clinics[czips[i]][j]['address']+ '<br>phone: '+  
              clinics[czips[i]][j]['phone']  +'<br>'+ '<a href='+ 
              clinics[czips[i]][j]['website']+'>'+'&#127758 Website</a>'+'<br><a href="https://www.google.com/maps/search/?api=1&query='+clinics[czips[i]][j]["location"]["latitude"]+','+clinics[czips[i]][j]["location"]["longitude"]+'">&#10137 Directions</a>'+
              '<br><br>'

              
            }
        }
          }
          document.getElementById("cls").value='';
        document.getElementById("shellresults1").innerHTML=content;
    
        
       
   
       
       
        
          
          return false; 
    
    }

    var fillszip = () => {
      
      zipfill=document.getElementById("filenter").value;
      document.getElementById("filenter").value='';
      if(zips.includes(zipfill)){content='';
      num=0
       content = '<b>Showing Shelters in zip code: '+zipfill+'</b><br> <br>';
      
        for (j=0;j< shelters[zipfill].length;j++){
          num++
          content=content+ '<b>'+ num +'. '+ shelters[zipfill][j]['name']+
          '</b><br>address: '+shelters[zipfill][j]['address']+ '<br>phone: '+  
          shelters[zipfill][j]['phone']  +'<br>'+ '<a href='+ 
          shelters[zipfill][j]['website']+'>'+'&#127758 Website</a>'+
          '<br><a href='+ shelters[zipfill][j]['directions']+'>'+'&#10137 Directions</a>'+
          '<br><br>'
        }
        document.getElementById("filenter").value='';
        document.getElementById("shellresults").innerHTML='';
      document.getElementById("shellresults").innerHTML=content;}
  
  
      else{
        document.getElementById("shellresults").innerHTML='';
      document.getElementById("shellresults").innerHTML= '<br><b>Please enter any of the following Philadelphia zip codes</b>: <br><br> 19147, 19140, 19123, 19106, 19146, 19134, 19104,<br> 19102, 19428, 19053, 19115, 19001, 19116, 19130'
      }
      // document.getElementById("shellresults").innerHTML= zipfill;
        
        return false; 
  
  }

  var fillczip = () => {
      
   zipfill=document.getElementById("filenterc").value;
 
   if(clzips.includes(zipfill)){content='';
   content='<b>Showing clinics in zip code:'+zipfill+'</b><br><br>'
   num=0
   
     for (j=0;j< clinics[zipfill].length;j++){
       num++
       content=content+ '<b>'+ num +'. '+ clinics[zipfill][j]['name']+
       '</b><br>address: '+clinics[zipfill][j]['address']+ '<br>phone: '+  
       clinics[zipfill][j]['phone']  +'<br>'+ '<a href='+ 
       clinics[zipfill][j]['website']+'>'+'&#127758 Website</a>' +'<br><a href="https://www.google.com/maps/search/?api=1&query='+clinics[zipfill][j]["location"]["latitude"]+','+clinics[zipfill][j]["location"]["longitude"]+'">&#10137 Directions</a>'+
       '<br><br>'
     }
     document.getElementById("filenterc").value='';
     document.getElementById("shellresults1").innerHTML='';
   document.getElementById("shellresults1").innerHTML=content;}
 
 
   else{
     document.getElementById("shellresults1").innerHTML='';
   document.getElementById("shellresults1").innerHTML= '<br><b>Please enter any of the following Philadelphia zip codes</b>:<br> <br>'+ '19103, 19104, 19106, 19114, 19115, 19118, 19119, 19120, 19123, 19125'+'<br>'+ '19126, 19127, 19130, 19134, 19135, 19136, 19138, 19142, 19144, 19145' +'<br>'+'19146, 19147, 19148, 19152, 19154';
   }
   
     
     return false; 
 
 }
   

    return{
      elogin,
      shells,
      clins,
      fillsh,
      fillcl,
      fillszip,
      fillczip
      
         
    }
  })();


  function c11(){
    document.getElementById('catsone1').innerHTML='<div><img id="strayy" src="../pictures/6.png"><br><b>Name: Reeses</b><br>Found this pet? <a href="./report.html">Report here &#8702;</a></div><div><img id="strayy" src="../pictures/7.png"><br><b>Name: Cleo</b><br>Found this pet? <a href="./report.html">Report here &#8702;</a></div>';
    document.getElementById('catsone2').innerHTML= '<div><img id="strayy" src="../pictures/22.png"><br><b>Name: Sunny</b><br>Found this pet? <a href="./report.html">Report here &#8702;</a></div><div><img id="strayy" src="../pictures/23.png"><br><b>Name: Brendon</b><br>Found this pet? <a href="./report.html">Report here &#8702;</a></div>';
    document.getElementById('pagec').style.backgroundColor='black';
    document.getElementById('pagec').style.color='white';
    document.getElementById('pagen').style.backgroundColor='white';
    document.getElementById('pagen').style.color='black';
    document.getElementById('pagen').style.border='solid 1px black';

  
  }

  function ad11(){
    document.getElementById('catsone1').innerHTML='<div><img id="strayy" src="../pictures/111.png"><br><b>Name: Fazo</b><br>Breed: Terrier, American Pitbull <br>Sex: Male<br>Age: 1Y / 6M<br></div><div><img id="strayy" src="../pictures/112.png"><br><b>Name: Jangunn</b><br>Breed: Terrier, Pitbull <br>Sex: Male<br>Age: 1Y / 3M<br></div>';
    document.getElementById('catsone2').innerHTML='<div><img id="strayy" src="../pictures/113.png"><br><b>Name: Tony</b><br>Breed: Terrier, Pitbull <br>Sex: Male<br>Age: 7Y / 2M<br></div><div><img id="strayy" src="../pictures/114.png"><br><b>Name: Chanel</b><br>Breed: Terrier, Pitbull <br>Sex: Male<br>Age: 1Y / 7M<br></div>';
    
    document.getElementById('pagec').style.backgroundColor='black';
    document.getElementById('pagec').style.color='white';
    document.getElementById('pagen').style.backgroundColor='white';
    document.getElementById('pagen').style.color='black';
    document.getElementById('pagen').style.border='solid 1px black';

  
  }
  function afd11(){
    document.getElementById('catsone1').innerHTML='<div><img id="strayy" src="../pictures/141.png"><br><b>Name: Hatchback</b><br>Breed: Mixed <br>Sex: Female<br>Age: 2Y / 1M<br></div><div><img id="strayy" src="../pictures/142.png"><br><b>Name: Milly</b><br>Breed: Mixed <br>Sex: Female<br>Age: 1Y / 7M<br></div>';
    document.getElementById('catsone2').innerHTML='<div><img id="strayy" src="../pictures/143.png"><br><b>Name: Wesley</b><br>Breed: Mixed <br>Sex: Male<br>Age: 2Y / 1M<br></div><div><img id="strayy" src="../pictures/144.png"><br><b>Name: Paris</b><br>Breed: Mixed <br>Sex: Female<br>Age: 2Y / 1M<br></div>';
    
    document.getElementById('pagec').style.backgroundColor='black';
    document.getElementById('pagec').style.color='white';
    document.getElementById('pagen').style.backgroundColor='white';
    document.getElementById('pagen').style.color='black';
    document.getElementById('pagen').style.border='solid 1px black';

  
  }

  function c111(){
    document.getElementById('catsone1').innerHTML='<div><img id="strayy" src="../pictures/81.png"><br><b>Name: Sushi</b><br><a href="./report.html">Report here &#8702;</a>, if this is your pet</div><div><img id="strayy" src="../pictures/82.png"><br><b>Name: Meelo</b><br><a href="./report.html">Report here &#8702;</a>, if this is your pet</div>';
    document.getElementById('catsone2').innerHTML= '<div><img id="strayy" src="../pictures/83.png"><br><b>Name: Roosevelt</b><br><a href="./report.html">Report here &#8702;</a>, if this is your pet</div><div><img id="strayy" src="../pictures/84.png"><br><b>Name: Grayson</b><br> <a href="./report.html">Report here &#8702;</a>, if this is your pet</div>';
    document.getElementById('pagec').style.backgroundColor='black';
    document.getElementById('pagec').style.color='white';
    document.getElementById('pagen').style.backgroundColor='white';
    document.getElementById('pagen').style.color='black';
    document.getElementById('pagen').style.border='solid 1px black';

  
  }
  function c222(){
    document.getElementById('catsone1').innerHTML='<div><img id="strayy" src="../pictures/85.png"><br><b>Name: Dorothy</b><br><a href="./report.html">Report here &#8702;</a>, if this is your pet</div><div><img id="strayy" src="../pictures/86.png"><br><b>Name: Twister</b><br><a href="./report.html">Report here &#8702;</a>, if this is your pet</div>';
    document.getElementById('catsone2').innerHTML= '<div><img id="strayy" src="../pictures/87.png"><br><b>Name: Maximillion</b><br><a href="./report.html">Report here &#8702;</a>, if this is your pet</div><div><img id="strayy" src="../pictures/88.png"><br><b>Name: Blessing</b><br> <a href="./report.html">Report here &#8702;</a>, if this is your pet</div>';
    document.getElementById('pagen').style.backgroundColor='black';
    document.getElementById('pagen').style.color='white';
    document.getElementById('pagec').style.backgroundColor='white';
    document.getElementById('pagec').style.color='black';
    document.getElementById('pagec').style.border='solid 1px black';

  
  }

  function d111(){
    document.getElementById('catsone1').innerHTML='<div><img id="strayy" src="../pictures/91.png"><br><b>Name: Lucien</b><br><a href="./report.html">Report here &#8702;</a>, if this is your pet</div><div><img id="strayy" src="../pictures/92.png"><br><b>Name: Zeus</b><br><a href="./report.html">Report here &#8702;</a>, if this is your pet</div>';
    document.getElementById('catsone2').innerHTML= '<div><img id="strayy" src="../pictures/93.png"><br><b>Name: Wiggles</b><br><a href="./report.html">Report here &#8702;</a>, if this is your pet</div><div><img id="strayy" src="../pictures/94.png"><br><b>Name: Sheba</b><br> <a href="./report.html">Report here &#8702;</a>, if this is your pet</div>';
    document.getElementById('pagec').style.backgroundColor='black';
    document.getElementById('pagec').style.color='white';
    document.getElementById('pagen').style.backgroundColor='white';
    document.getElementById('pagen').style.color='black';
    document.getElementById('pagen').style.border='solid 1px black';

  
  }
  function d222(){
    document.getElementById('catsone1').innerHTML='<div><img id="strayy" src="../pictures/95.png"><br><b>Name: Samantha</b><br><a href="./report.html">Report here &#8702;</a>, if this is your pet</div><div><img id="strayy" src="../pictures/96.png"><br><b>Name: Rumple</b><br><a href="./report.html">Report here &#8702;</a>, if this is your pet</div>';
    document.getElementById('catsone2').innerHTML= '<div><img id="strayy" src="../pictures/97.png"><br><b>Name: North</b><br><a href="./report.html">Report here &#8702;</a>, if this is your pet</div><div><img id="strayy" src="../pictures/98.png"><br><b>Name: James</b><br> <a href="./report.html">Report here &#8702;</a>, if this is your pet</div>';
    document.getElementById('pagen').style.backgroundColor='black';
    document.getElementById('pagen').style.color='white';
    document.getElementById('pagec').style.backgroundColor='white';
    document.getElementById('pagec').style.color='black';
    document.getElementById('pagec').style.border='solid 1px black';

  
  }



  function d11(){
    document.getElementById('catsone1').innerHTML='<div><img id="strayy" src="../pictures/41.png"><br><b>Name: Chase</b><br>Found this pet? <a href="./report.html">Report here &#8702;</a></div><div><img id="strayy" src="../pictures/42.png"><br><b>Name: Steve</b><br>Found this pet? <a href="./report.html">Report here &#8702;</a></div>';
    document.getElementById('catsone2').innerHTML= '<div><img id="strayy" src="../pictures/43.png"><br><b>Name: Terri</b><br>Found this pet? <a href="./report.html">Report here &#8702;</a></div><div><img id="strayy" src="../pictures/44.png"><br><b>Name: Leo</b><br>Found this pet? <a href="./report.html">Report here &#8702;</a></div>';
    document.getElementById('pagec').style.backgroundColor='black';
    document.getElementById('pagec').style.color='white';
    document.getElementById('pagen').style.backgroundColor='white';
    document.getElementById('pagen').style.color='black';
    document.getElementById('pagen').style.border='solid 1px black';

  
  }

  function d22(){
    document.getElementById('pagen').style.backgroundColor='black';
    document.getElementById('pagen').style.border='solid 1px black';

    document.getElementById('pagen').style.color='white';
    document.getElementById('pagec').style.backgroundColor='white';
    document.getElementById('pagec').style.color='black';

    document.getElementById('catsone1').innerHTML='<div><img id="strayy" src="../pictures/45.png"><br><b>Name: Zizi</b><br>Found this pet? <a href="./report.html">Report here &#8702;</a></div><div><img id="strayy" src="../pictures/46.png"><br><b>Name: Sokura</b><br>Found this pet? <a href="./report.html">Report here &#8702;</a></div>';
    document.getElementById('catsone2').innerHTML='<div><img id="strayy" src="../pictures/47.png"><br><b>Name: Oreo</b><br>Found this pet? <a href="./report.html">Report here &#8702;</a></div><div><img id="strayy" src="../pictures/48.png"><br><b>Name: Junior</b><br>Found this pet? <a href="./report.html">Report here &#8702;</a></div>';
  }

  function c22(){
    document.getElementById('pagen').style.backgroundColor='black';
    document.getElementById('pagen').style.border='solid 1px black';

    document.getElementById('pagen').style.color='white';
    document.getElementById('pagec').style.backgroundColor='white';
    document.getElementById('pagec').style.color='black';

    document.getElementById('catsone1').innerHTML='<div><img id="strayy" src="../pictures/31.png"><br><b>Name: Baby Carrot</b><br>Found this pet? <a href="./report.html">Report here &#8702;</a></div><div><img id="strayy" src="../pictures/32.png"><br><b>Name: Charlotte</b><br>Found this pet? <a href="./report.html">Report here &#8702;</a></div';
    document.getElementById('catsone2').innerHTML='<div><img id="strayy" src="../pictures/33.png"><br><b>Name: Tigger</b><br>Found this pet? <a href="./report.html">Report here &#8702;</a></div><div><img id="strayy" src="../pictures/34.png"><br><b>Name: Paul</b><br>Found this pet? <a href="./report.html">Report here &#8702;</a></div>';
  
  }

  function ad22(){
    document.getElementById('pagen').style.backgroundColor='black';
    document.getElementById('pagen').style.border='solid 1px black';

    document.getElementById('pagen').style.color='white';
    document.getElementById('pagec').style.backgroundColor='white';
    document.getElementById('pagec').style.color='black';

    document.getElementById('catsone1').innerHTML='<div><img id="strayy" src="../pictures/115.png"><br><b>Name: Gabby</b><br>Breed: Terrier, Pitbull <br>Sex: Female<br>Age: 7Y / 1M<br></div><div><img id="strayy" src="../pictures/116.png"><br><b>Name: Bardo</b><br>Breed: Mixed <br>Sex: Male<br>Age: 4Y / 1M<br></div>';
    document.getElementById('catsone2').innerHTML='<div><img id="strayy" src="../pictures/117.png"><br><b>Name: Buggy Bear</b><br>Breed: Terrier, Pitbull <br>Sex: Female<br>Age: 4Y / 1M<br></div><div><img id="strayy" src="../pictures/118.png"><br><b>Name: Gwen</b><br>Breed: Mixed <br>Sex: Female<br>Age: 7Y / 2M<br></div>';
    
  }

  function afd22(){
    document.getElementById('pagen').style.backgroundColor='black';
    document.getElementById('pagen').style.border='solid 1px black';

    document.getElementById('pagen').style.color='white';
    document.getElementById('pagec').style.backgroundColor='white';
    document.getElementById('pagec').style.color='black';

    document.getElementById('catsone1').innerHTML='<div><img id="strayy" src="../pictures/145.png"><br><b>Name: Hiede</b><br>Breed: Mixed <br>Sex: Female<br>Age: 3Y / 1M<br></div><div><img id="strayy" src="../pictures/146.png"><br><b>Name: Cyclops</b><br>Breed: Mixed <br>Sex: Male<br>Age: 4Y / 1M<br></div>';
    document.getElementById('catsone2').innerHTML='<div><img id="strayy" src="../pictures/147.png"><br><b>Name: Coffee </b><br>Breed: Mixed <br>Sex: MAle<br>Age: 8Y / 1M<br></div><div><img id="strayy" src="../pictures/148.png"><br><b>Name: Tank</b><br>Breed: Mixed <br>Sex: Male<br>Age: 4Y / 1M<br></div>';
    
  }
  function ac11(){
    document.getElementById('pagec').style.backgroundColor='black';
    document.getElementById('pagec').style.border='solid 1px black';

    document.getElementById('pagec').style.color='white';
    document.getElementById('pagen').style.backgroundColor='white';
    document.getElementById('pagen').style.color='black';
    document.getElementById('pagen').style.border='solid 1px black';


    document.getElementById('catsone1').innerHTML='<div><img id="strayy" src="../pictures/121.png"><br><b>Name: Charmed</b><br>Breed: Domestic Shorthair <br>Sex: Male<br>Age: 8Y / 2M<br></div><div><img id="strayy" src="../pictures/122.png"><br><b>Name: Solme</b><br>Breed: Domestic Shorthair <br>Sex: Female<br>Age: 7Y / 2M<br></div>';
    document.getElementById('catsone2').innerHTML='<div><img id="strayy" src="../pictures/123.png"><br><b>Name: Xavier</b><br>Breed: Domestic Shorthair <br>Sex: Female<br>Age: 2Y / 2M<br></div><div><img id="strayy" src="../pictures/124.png"><br><b>Name: Isis</b><br>Breed: Domestic Shorthair <br>Sex: Female<br>Age: 12Y / 2M<br></div>';
    
  }
  function ac22(){
    document.getElementById('pagen').style.backgroundColor='black';
    document.getElementById('pagen').style.border='solid 1px black';

    document.getElementById('pagen').style.color='white';
    document.getElementById('pagec').style.backgroundColor='white';
    document.getElementById('pagec').style.color='black';

    document.getElementById('catsone1').innerHTML='<div><img id="strayy" src="../pictures/125.png"><br><b>Name: Luna Luna</b><br>Breed: Domestic Shorthair <br>Sex: Female<br>Age: 2Y / 7M<br></div><div><img id="strayy" src="../pictures/126.png"><br><b>Name: Xena</b><br>Breed: Domestic Shorthair <br>Sex: Female<br>Age: 5Y / 4M<br></div>';
    document.getElementById('catsone2').innerHTML='<div><img id="strayy" src="../pictures/127.png"><br><b>Name: Alley</b><br>Breed: Domestic Shorthair <br>Sex: Male<br>Age: 7Y / 1M<br></div><div><img id="strayy" src="../pictures/128.png"><br><b>Name: Crush</b><br>Breed: Domestic Shorthair <br>Sex: Female<br>Age: 2Y / 1M<br></div>';
    
  }

  function afc11(){
    document.getElementById('pagec').style.backgroundColor='black';
    document.getElementById('pagec').style.border='solid 1px black';

    document.getElementById('pagec').style.color='white';
    document.getElementById('pagen').style.backgroundColor='white';
    document.getElementById('pagen').style.color='black';
    document.getElementById('pagen').style.border='solid 1px black';


    document.getElementById('catsone1').innerHTML='<div><img id="strayy" src="../pictures/131.png"><br><b>Name: Dude</b><br>Breed: Domestic Shorthair <br>Sex: Male<br>Age: 17Y / 1M<br></div><div><img id="strayy" src="../pictures/132.png"><br><b>Name: Cesar</b><br>Breed: Domestic Shorthair <br>Sex: Male<br>Age: 8Y / 1M<br></div>';
    document.getElementById('catsone2').innerHTML='<div><img id="strayy" src="../pictures/133.png"><br><b>Name: Blu</b><br>Breed: Domestic Shorthair <br>Sex: Male<br>Age: 2Y / 1M<br></div><div><img id="strayy" src="../pictures/134.png"><br><b>Name: Patches</b><br>Breed: Domestic Shorthair <br>Sex: Female<br>Age: 1Y / 2M<br></div>';
    
  }
  function afc22(){
    document.getElementById('pagen').style.backgroundColor='black';
    document.getElementById('pagen').style.border='solid 1px black';

    document.getElementById('pagen').style.color='white';
    document.getElementById('pagec').style.backgroundColor='white';
    document.getElementById('pagec').style.color='black';

    document.getElementById('catsone1').innerHTML='<div><img id="strayy" src="../pictures/135.png"><br><b>Name: Shadow</b><br>Breed: Domestic Shorthair <br>Sex: Male<br>Age: 15Y / 1M<br></div><div><img id="strayy" src="../pictures/126.png"><br><b>Name: Silver</b><br>Breed: Domestic Shorthair <br>Sex: Female<br>Age: 8Y / 4M<br></div>';
    document.getElementById('catsone2').innerHTML='<div><img id="strayy" src="../pictures/137.png"><br><b>Name: Missy</b><br>Breed: Domestic Shorthair <br>Sex: Female<br>Age: 15Y / 4M<br></div><div><img id="strayy" src="../pictures/138.png"><br><b>Name: Sasha Fierce</b><br>Breed: Domestic Shorthair <br>Sex: Female<br>Age: 4Y / 1M<br></div>';
    
  }


  function clbig(){

    document.getElementById('filterlost').innerHTML=' <div id="lcc" onclick="clbig()">Cats</div> <div id="lcnc" onclick="dlbig()">Dogs</div>';
    document.getElementById('lostcont').innerHTML='<br><div id="navpp">Pages: <button onclick="c11()" id="pagec">1</button> <button onclick="c22()" id="pagen">2</button></div><div id="catsone1"></div><br><br><div id="catsone2"></div>';
    c11();
    
  }
  function acbig(){

    document.getElementById('filterlost').innerHTML=' <div id="lcc" onclick="acbig()">Cats</div> <div id="lcnc" onclick="adbig()">Dogs</div>';
    document.getElementById('lostcont').innerHTML='<br><div id="navpp">Pages: <button onclick="ac11()" id="pagec">1</button> <button onclick="ac22()" id="pagen">2</button></div><div id="catsone1"></div><br><br><div id="catsone2"></div>';
    ac11();
    
  }

  function adbig(){

    document.getElementById('filterlost').innerHTML=' <div id="lcnc" onclick="acbig()">Cats</div> <div id="lcc" onclick="adbig()">Dogs</div>';
    document.getElementById('lostcont').innerHTML='<br><div id="navpp">Pages: <button onclick="ad11()" id="pagec">1</button> <button onclick="ad22()" id="pagen">2</button></div><div id="catsone1"></div><br><br><div id="catsone2"></div>';
    ad11();
    
  }
  function afcbig(){

    document.getElementById('filterlost').innerHTML=' <div id="lcc" onclick="afcbig()">Cats</div> <div id="lcnc" onclick="afdbig()">Dogs</div>';
    document.getElementById('lostcont').innerHTML='<br><div id="navpp">Pages: <button onclick="afc11()" id="pagec">1</button> <button onclick="afc22()" id="pagen">2</button></div><div id="catsone1"></div><br><br><div id="catsone2"></div>';
    afc11();
    
  }

  function afdbig(){

    document.getElementById('filterlost').innerHTML=' <div id="lcnc" onclick="afcbig()">Cats</div> <div id="lcc" onclick="afdbig()">Dogs</div>';
    document.getElementById('lostcont').innerHTML='<br><div id="navpp">Pages: <button onclick="afd11()" id="pagec">1</button> <button onclick="afd22()" id="pagen">2</button></div><div id="catsone1"></div><br><br><div id="catsone2"></div>';
    afd11();
    
  }
  function cfbig(){

    document.getElementById('filterlost').innerHTML=' <div id="lcc" onclick="cfbig()">Cats</div> <div id="lcnc" onclick="dfbig()">Dogs</div>';
    document.getElementById('lostcont').innerHTML='<br><div id="navpp">Pages: <button onclick="c111()" id="pagec">1</button> <button onclick="c222()" id="pagen">2</button></div><div id="catsone1"></div><br><br><div id="catsone2"></div>';
    c111();
    
  }

  function dlbig(){
    document.getElementById('filterlost').innerHTML='<div id="lcnc" onclick="clbig()">Cats</div> <div id="lcc" onclick="dlbig()">Dogs</div>';
    document.getElementById('lostcont').innerHTML=' <br><div id="navp">Pages: <button onclick="d11()" id="pagec">1</button> <button onclick="d22()" id="pagen">2</button> </div><div id="catsone1"></div><br><br><div id="catsone2"></div>';
    d11();
  }

  function dfbig(){
    document.getElementById('filterlost').innerHTML='<div id="lcnc" onclick="cfbig()">Cats</div> <div id="lcc" onclick="dfbig()">Dogs</div>';
    document.getElementById('lostcont').innerHTML=' <br><div id="navp">Pages: <button onclick="d111()" id="pagec">1</button> <button onclick="d222()" id="pagen">2</button> </div><div id="catsone1"></div><br><br><div id="catsone2"></div>';
    d111();
  }

  function autocomplete(searchEle, arr) {
    var currentFocus;
   shells11();
    searchEle.addEventListener("input", function(e) {
       var divCreate,
       b,
       i,
       divCreate = document.createElement("DIV");
       fieldVal = this.value;
       if(fieldVal.length==0){
         divCreate.style.display="none";
       }
       closeAllLists();
       
       currentFocus = -1;
       

       divCreate.setAttribute("id", this.id + "autocomplete-list");
       divCreate.setAttribute("class", "autocomplete-items");
       divCreate.style.maxHeight="16vh";
       
       divCreate.style.overflow="scroll";
       divCreate.style.textAlign="left";
       divCreate.style.backgroundColor="white";
       divCreate.style.borderRadius="5px";
       var ui=0;
       var uii=0;
       document.getElementById("aone").appendChild(divCreate);
       for (i = 0; i <arr.length; i++) {
          if ( arr[i].toUpperCase().includes(fieldVal.toUpperCase()) ) {
              ui=1;
              uii++;
             b = document.createElement("DIV");
             b.style.cursor='pointer';
             b.style.minHeight="3.5vh";
             b.style.paddingTop='1vh';
            //  b.style.backgroundColor="black";
             b.onmouseover= function() 
             {
                 this.style.backgroundColor = "#007185";
                 this.style.color = "white";
             }
             b.onmouseout= function() 
             {
                 this.style.backgroundColor = "white";
                 this.style.color = "black";

             }
             b.innerHTML = arr[i];

             

            //  b.innerHTML += "<strong>" + arr[i].substr(arr[i].indexOf(fieldVal), fieldVal.length) + "</strong>";
            //  b.innerHTML += arr[i].substr(fieldVal.length);
            

             b.innerHTML += "<input  type=hidden value=\"" + arr[i] + "\">";
             ab=arr[i]
             b.addEventListener("click", function(e) {
    document.getElementById("filter").style.visibility="hidden";

                vvalue = this.getElementsByTagName("input")[0].value;
                searchEle.value='';
                 var content='';
    
    for(i=0;i<zips.length;i++){
      for (j=0;j< shelters[zips[i]].length;j++){
        
        if (shelters[zips[i]][j]['name']==vvalue){
          content=content+ '<b>'+ shelters[zips[i]][j]['name']+
          '</b><br>address: '+shelters[zips[i]][j]['address']+ '<br>phone: '+  
          shelters[zips[i]][j]['phone']  +'<br>'+ '<a href='+ 
          shelters[zips[i]][j]['website']+'>'+'&#127758 Website</a>'+
          '<br><a href='+ shelters[zips[i]][j]['directions']+'>'+'&#10137 Directions</a>'+
          '<br><br>'
        }
      }
    }

    document.getElementById("shellresults").innerHTML=content;

                closeAllLists();
             });
             divCreate.appendChild(b);
          }

        //   else{
        //       divCreate.style.height="0vh";
        //   }
       }
       if(ui==0){
              divCreate.style.height="0vh";

       }
       if(uii==1){
        divCreate.style.height="4vh"
       }
       if(uii==2){
        divCreate.style.height="8vh";
    
    }
    });
    searchEle.addEventListener("keydown", function(e) {
       var autocompleteList = document.getElementById(
          this.id + "autocomplete-list"
       );
       if (autocompleteList)
          autocompleteList = autocompleteList.getElementsByTagName("div");
       if (e.keyCode == 40) {
          currentFocus++;
          addActive(autocompleteList);
       }
       else if (e.keyCode == 38) {
          //up
          currentFocus--;
          addActive(autocompleteList);
       }
       else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
             if (autocompleteList) autocompleteList[currentFocus].click();
          }
       }
    });
    function addActive(autocompleteList) {
       if (!autocompleteList) return false;
          removeActive(autocompleteList);
       if (currentFocus >= autocompleteList.length) currentFocus = 0;
       if (currentFocus < 0) currentFocus = autocompleteList.length - 1;
       autocompleteList[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(autocompleteList) {
       for (var i = 0; i < autocompleteList.length; i++) {
          autocompleteList[i].classList.remove("autocomplete-active");
       }
    }
    function closeAllLists(elmnt) {
       var autocompleteList = document.getElementsByClassName(
          "autocomplete-items"
       );
       for (var i = 0; i < autocompleteList.length; i++) {
          if (elmnt != autocompleteList[i] && elmnt != searchEle) {
             autocompleteList[i].parentNode.removeChild(autocompleteList[i]);
          }
       }
    }
    document.addEventListener("click", function(e) {
       closeAllLists(e.target);
    });
 }



 function autocomplete1(searchEle, arr) {
    var currentFocus;
    clins11();
    searchEle.addEventListener("input", function(e) {
       var divCreate,
       b,
       i,
       divCreate = document.createElement("DIV");
       fieldVal = this.value;
       if(fieldVal.length==0){
         divCreate.style.display="none";
       }
       closeAllLists();
       
       currentFocus = -1;
       var ui=0;
       var uii=0;
       divCreate.setAttribute("id", this.id + "autocomplete-list");
       divCreate.setAttribute("class", "autocomplete-items");
       divCreate.style.maxHeight="16vh";
       divCreate.style.overflow="scroll";
       divCreate.style.textAlign="left";
       divCreate.style.backgroundColor="white";
       divCreate.style.borderRadius="5px";

       
       document.getElementById("aone").appendChild(divCreate);
       for (i = 0; i <arr.length; i++) {
          if ( arr[i].toUpperCase().includes(fieldVal.toUpperCase()) ) {
              ui=1;
              uii++;
             b = document.createElement("DIV");
             b.style.cursor='pointer';
             b.style.minHeight="3.5vh";
             b.style.paddingTop='1vh';
             b.onmouseover= function() 
             {
                 this.style.backgroundColor = "#007185";
                 this.style.color = "white";
             }
             b.onmouseout= function() 
             {
                 this.style.backgroundColor = "white";
                 this.style.color = "black";

             }
             b.innerHTML = arr[i];

             

            //  b.innerHTML += "<strong>" + arr[i].substr(arr[i].indexOf(fieldVal), fieldVal.length) + "</strong>";
            //  b.innerHTML += arr[i].substr(fieldVal.length);
            

             b.innerHTML += "<input  type=hidden value=\"" + arr[i] + "\">";
             ab=arr[i]
             b.addEventListener("click", function(e) {
        document.getElementById("filter").style.visibility="hidden";

                vvalue = this.getElementsByTagName("input")[0].value;
                searchEle.value='';
                 var content='';
    
    for(i=0;i<czips.length;i++){
      for (j=0;j<clinics[czips[i]].length;j++){
        
        if (clinics[czips[i]][j]['name']==vvalue){
          content=content+ '<b>'+ clinics[czips[i]][j]['name']+
          '</b><br>address: '+clinics[czips[i]][j]['address']+ '<br>phone: '+  
          clinics[czips[i]][j]['phone']  +'<br>'+ '<a href='+ 
          clinics[czips[i]][j]['website']+'>'+'&#127758 Website</a>'+'<br><a href="https://www.google.com/maps/search/?api=1&query='+clinics[czips[i]][j]["location"]["latitude"]+','+clinics[czips[i]][j]["location"]["longitude"]+'">&#10137 Directions</a>'+
          '<br><br>'
        }
            // content=content+ 'hi'
      }
    }

    document.getElementById("shellresults1").innerHTML= content;

                closeAllLists();
             });
             divCreate.appendChild(b);
          }
       }
       if(ui==0){
        divCreate.style.height="0vh";

 }
 if(uii==1){
    divCreate.style.height="4vh";

}if(uii==2){
    divCreate.style.height="8vh";

}
    });
    searchEle.addEventListener("keydown", function(e) {
       var autocompleteList = document.getElementById(
          this.id + "autocomplete-list"
       );
       if (autocompleteList)
          autocompleteList = autocompleteList.getElementsByTagName("div");
       if (e.keyCode == 40) {
          currentFocus++;
          addActive(autocompleteList);
       }
       else if (e.keyCode == 38) {
          //up
          currentFocus--;
          addActive(autocompleteList);
       }
       else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
             if (autocompleteList) autocompleteList[currentFocus].click();
          }
       }
    });
    function addActive(autocompleteList) {
       if (!autocompleteList) return false;
          removeActive(autocompleteList);
       if (currentFocus >= autocompleteList.length) currentFocus = 0;
       if (currentFocus < 0) currentFocus = autocompleteList.length - 1;
       autocompleteList[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(autocompleteList) {
       for (var i = 0; i < autocompleteList.length; i++) {
          autocompleteList[i].classList.remove("autocomplete-active");
       }
    }
    function closeAllLists(elmnt) {
       var autocompleteList = document.getElementsByClassName(
          "autocomplete-items"
       );
       for (var i = 0; i < autocompleteList.length; i++) {
          if (elmnt != autocompleteList[i] && elmnt != searchEle) {
             autocompleteList[i].parentNode.removeChild(autocompleteList[i]);
          }
       }
    }
    document.addEventListener("click", function(e) {
       closeAllLists(e.target);
    });
 }


 var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function emp(a){
  var xx=localStorage.getItem("storageName");
  document.getElementById('empdata').innerHTML='<b>Name: '+xx.toUpperCase()+'</b><br><b>EMP ID: 14671168</b><br><b><a href="./employee.html">Logout</a></b>'
}

function shells11  () {
  content='<b>Showing  1 to 10 of 19 shelters <br><br></b>'+ '<div id="navpp">Pages: <button onclick="shells11()" id="pagec">1</button> <button onclick="shells22()" id="pagen">2</button></div><br><br>'
  document.getElementById("filter").style.visibility="visible";
  num=0
  for(i=0;i<zips.length;i++){
    for (j=0;j< shelters[zips[i]].length;j++){
      num++;

      if(num<11){
      content=content+ '<b>'+ num +'. '+ shelters[zips[i]][j]['name']+
      '</b><br>address: '+shelters[zips[i]][j]['address']+ '<br>phone: '+  
      shelters[zips[i]][j]['phone']  +'<br>'+ '<a href='+ 
      shelters[zips[i]][j]['website']+'>'+'&#127758 Website</a>'+
      '<br><a href='+ shelters[zips[i]][j]['directions']+'>'+'&#10137 Directions</a>'+
      '<br><br>'
      ;
    }}
  }

  document.getElementById("shellresults").innerHTML=content;
  
  
  

}

function shells22  () {
content='<b>Showing 11 to 19 of 19 shelters <br><br></b>'+ '<div id="navpp">Pages: <button onclick="shells11()" id="pagen">1</button> <button onclick="shells22()" id="pagec">2</button></div><br><br>'
;
  document.getElementById("filter").style.visibility="visible";
  num=0
  for(i=0;i<zips.length;i++){
    for (j=0;j< shelters[zips[i]].length;j++){
    
      num++;
      if(num>10){
      content=content+ '<b>'+ num +'. '+ shelters[zips[i]][j]['name']+
      '</b><br>address: '+shelters[zips[i]][j]['address']+ '<br>phone: '+  
      shelters[zips[i]][j]['phone']  +'<br>'+ '<a href='+ 
      shelters[zips[i]][j]['website']+'>'+'&#127758 Website</a>'+
      '<br><a href='+ shelters[zips[i]][j]['directions']+'>'+'&#10137 Directions</a>'+
      '<br><br>'
      ;
    }}
  }

  document.getElementById("shellresults").innerHTML=content;
  
  
  

}

function clins11 () {
  content='<b>Showing 1 to 10 of 56 clinics</b><br><br>'+' <div id="navpp">Pages: <button onclick="clins11()" id="pagec">1</button> <button onclick="clins22()" id="pagen">2</button> <button onclick="clins33()" id="pagen">3</button> <button onclick="clins44()" id="pagen">4</button> <button onclick="clins55()" id="pagen">5</button> <button onclick="clins66()" id="pagen">6</button></div><br><br>';

  document.getElementById("filter").style.visibility="visible";

  num=0
  for(i=0;i<clzips.length;i++){
    for (j=0;j< clinics[clzips[i]].length;j++){
      num++
      if(num<11){
      content=content+ '<b>'+ num +'. '+ clinics[clzips[i]][j]['name']+
      '</b><br>address: '+clinics[clzips[i]][j]['address']+ '<br>phone: '+  
      clinics[clzips[i]][j]['phone']  +'<br>'+ '<a href='+ 
      clinics[clzips[i]][j]['website']+'>'+'&#127758 Website</a>'+'<br><a href="https://www.google.com/maps/search/?api=1&query='+clinics[czips[i]][j]["location"]["latitude"]+','+clinics[czips[i]][j]["location"]["longitude"]+'">&#10137 Directions</a>'+
       
      '<br><br>'
    }}
  }

  document.getElementById("shellresults1").innerHTML=content;
    

}
function clins22 () {
  content='<b>Showing 11 to 20 of 56 clinics</b><br><br>'+' <div id="navpp">Pages: <button onclick="clins11()" id="pagen">1</button> <button onclick="clins22()" id="pagec">2</button> <button onclick="clins33()" id="pagen">3</button> <button onclick="clins44()" id="pagen">4</button> <button onclick="clins55()" id="pagen">5</button> <button onclick="clins66()" id="pagen">6</button></div><br><br>';

  document.getElementById("filter").style.visibility="visible";

  num=0
  for(i=0;i<clzips.length;i++){
    for (j=0;j< clinics[clzips[i]].length;j++){
      num++
      if(num>10 && num<21){
      content=content+ '<b>'+ num +'. '+ clinics[clzips[i]][j]['name']+
      '</b><br>address: '+clinics[clzips[i]][j]['address']+ '<br>phone: '+  
      clinics[clzips[i]][j]['phone']  +'<br>'+ '<a href='+ 
      clinics[clzips[i]][j]['website']+'>'+'&#127758 Website</a>'+'<br><a href="https://www.google.com/maps/search/?api=1&query='+clinics[czips[i]][j]["location"]["latitude"]+','+clinics[czips[i]][j]["location"]["longitude"]+'">&#10137 Directions</a>'+
       
      '<br><br>'
    }}
  }

  document.getElementById("shellresults1").innerHTML=content;
    

}

function clins33 () {
  content='<b>Showing 21 to 30 of 56 clinics</b><br><br>'+' <div id="navpp">Pages: <button onclick="clins11()" id="pagen">1</button> <button onclick="clins22()" id="pagen">2</button> <button onclick="clins33()" id="pagec">3</button> <button onclick="clins44()" id="pagen">4</button> <button onclick="clins55()" id="pagen">5</button> <button onclick="clins66()" id="pagen">6</button></div><br><br>';

  document.getElementById("filter").style.visibility="visible";

  num=0
  for(i=0;i<clzips.length;i++){
    for (j=0;j< clinics[clzips[i]].length;j++){
      num++
      if(num>20 && num<31){
      content=content+ '<b>'+ num +'. '+ clinics[clzips[i]][j]['name']+
      '</b><br>address: '+clinics[clzips[i]][j]['address']+ '<br>phone: '+  
      clinics[clzips[i]][j]['phone']  +'<br>'+ '<a href='+ 
      clinics[clzips[i]][j]['website']+'>'+'&#127758 Website</a>'+'<br><a href="https://www.google.com/maps/search/?api=1&query='+clinics[czips[i]][j]["location"]["latitude"]+','+clinics[czips[i]][j]["location"]["longitude"]+'">&#10137 Directions</a>'+
       
      '<br><br>'
    }}
  }

  document.getElementById("shellresults1").innerHTML=content;
    

}

function clins44 () {
  content='<b>Showing 31 to 40 of 56 clinics</b><br><br>'+' <div id="navpp">Pages: <button onclick="clins11()" id="pagen">1</button> <button onclick="clins22()" id="pagen">2</button> <button onclick="clins33()" id="pagen">3</button> <button onclick="clins44()" id="pagec">4</button> <button onclick="clins55()" id="pagen">5</button> <button onclick="clins66()" id="pagen">6</button></div><br><br>';

  document.getElementById("filter").style.visibility="visible";

  num=0
  for(i=0;i<clzips.length;i++){
    for (j=0;j< clinics[clzips[i]].length;j++){
      num++
      if(num>30 && num<41){
      content=content+ '<b>'+ num +'. '+ clinics[clzips[i]][j]['name']+
      '</b><br>address: '+clinics[clzips[i]][j]['address']+ '<br>phone: '+  
      clinics[clzips[i]][j]['phone']  +'<br>'+ '<a href='+ 
      clinics[clzips[i]][j]['website']+'>'+'&#127758 Website</a>'+'<br><a href="https://www.google.com/maps/search/?api=1&query='+clinics[czips[i]][j]["location"]["latitude"]+','+clinics[czips[i]][j]["location"]["longitude"]+'">&#10137 Directions</a>'+
       
      '<br><br>'
    }}
  }

  document.getElementById("shellresults1").innerHTML=content;
    

}


function clins55 () {
  content='<b>Showing 41 to 50 of 56 clinics</b><br><br>'+' <div id="navpp">Pages: <button onclick="clins11()" id="pagen">1</button> <button onclick="clins22()" id="pagen">2</button> <button onclick="clins33()" id="pagen">3</button> <button onclick="clins44()" id="pagen">4</button> <button onclick="clins55()" id="pagec">5</button> <button onclick="clins66()" id="pagen">6</button></div><br><br>';

  document.getElementById("filter").style.visibility="visible";

  num=0
  for(i=0;i<clzips.length;i++){
    for (j=0;j< clinics[clzips[i]].length;j++){
      num++
      if(num>40 && num<51){
      content=content+ '<b>'+ num +'. '+ clinics[clzips[i]][j]['name']+
      '</b><br>address: '+clinics[clzips[i]][j]['address']+ '<br>phone: '+  
      clinics[clzips[i]][j]['phone']  +'<br>'+ '<a href='+ 
      clinics[clzips[i]][j]['website']+'>'+'&#127758 Website</a>'+'<br><a href="https://www.google.com/maps/search/?api=1&query='+clinics[czips[i]][j]["location"]["latitude"]+','+clinics[czips[i]][j]["location"]["longitude"]+'">&#10137 Directions</a>'+
       
      '<br><br>'
    }}
  }

  document.getElementById("shellresults1").innerHTML=content;
    

}


function clins66 () {
  content='<b>Showing 51 to 56 of 56 clinics</b><br><br>'+' <div id="navpp">Pages: <button onclick="clins11()" id="pagen">1</button> <button onclick="clins22()" id="pagen">2</button> <button onclick="clins33()" id="pagen">3</button> <button onclick="clins44()" id="pagen">4</button> <button onclick="clins55()" id="pagen">5</button> <button onclick="clins66()" id="pagec">6</button></div><br><br>';

  document.getElementById("filter").style.visibility="visible";

  num=0
  for(i=0;i<clzips.length;i++){
    for (j=0;j< clinics[clzips[i]].length;j++){
      num++
      if(num>50 && num<61){
      content=content+ '<b>'+ num +'. '+ clinics[clzips[i]][j]['name']+
      '</b><br>address: '+clinics[clzips[i]][j]['address']+ '<br>phone: '+  
      clinics[clzips[i]][j]['phone']  +'<br>'+ '<a href='+ 
      clinics[clzips[i]][j]['website']+'>'+'&#127758 Website</a>'+'<br><a href="https://www.google.com/maps/search/?api=1&query='+clinics[czips[i]][j]["location"]["latitude"]+','+clinics[czips[i]][j]["location"]["longitude"]+'">&#10137 Directions</a>'+
       
      '<br><br>'
    }}
  }

  document.getElementById("shellresults1").innerHTML=content;
    

}

var stories=['<div id="stories">Stories</div><b><br>Once Covered In Cactus Spines, \'Cholla Charlie\' Is Now Happy, Healthy, and Adopted</b><br> <br><img id="stray2" src="./pictures/3.jpeg"> <br> <br><a href="https://www.dailypaws.com/pet-news-entertainment/adoption-stories/dog-covered-cactus-spines-adopted-arizona">Read more &#8702;</a> ']

function report1(){
      one=document.getElementById("ri1").value;
      two=document.getElementById("ri2").value;
      three=document.getElementById("ri3").value;
      four=document.getElementById("ri4").value;
      six=document.getElementById("rii").value;
      seven=document.getElementById("typer1").value;
      eight=document.getElementById("typer2").value;

    if(one==''|| two==''|| three==''|| four==''|| six==''|| seven == '' || eight==''){
      alert("Please fill all the fields")
    }
    else{
      document.getElementById("reportform").innerHTML="<b>THANK YOU! <br>One of our representatives will be in touch with you shortly. <br> <a href='./report.html'>Go back.</a></b>"
    }

}

var storindex=1;
function stories1(){
  document.getElementById('innerind').innerHTML='<div id="stories">Stories</div><b><br>Once Covered In Cactus Spines, \'Cholla Charlie\' Is Now Happy, Healthy, and Adopted</b><br> <br><img id="stray2" src="./pictures/3.jpeg"> <br> <br>How\'s that for a glow-up?<br><a href="https://www.dailypaws.com/pet-news-entertainment/adoption-stories/dog-covered-cactus-spines-adopted-arizona">Read more &#8702;</a> ';
  storindex=1;
}

function stories2(){
  document.getElementById('innerind').innerHTML='<div id="stories">Stories</div><b><br>Foster Dog Who Lost Her Own Litter Becomes Doting Surrogate Mother to 10 Orphaned Puppies</b><br> <br><img id="stray2" src="./pictures/4.jpeg"> <br> <br>Sweet Pepper sprang into action right when these pups needed her the most.<br><a href="https://www.dailypaws.com/pet-news-entertainment/hero-animals/pepper-foster-dog-surrogate-mom-orphaned-litter">Read more &#8702;</a> '
  storindex=2;

}

function stories3(){
  document.getElementById('innerind').innerHTML='<div id="stories">Stories</div><b><br>Retriever Puppy Swept Away from Beach, Rescued by Marine PoliceVirginia Puppy Swept Away By Ocean Current Saved After Police Spot Dog\'s Nose Above Water</b><br> <br><img id="stray2" src="./pictures/555.jpeg"> <br> <br>Chesapeake Bay Marine Patrol officers bought a floatation device for the dog, named Skip Jack, after they rescued him from the ocean current.<br><a href="https://www.dailypaws.com/syndication/puppy-swept-by-virginia-current-rescued-by-marine-police">Read more &#8702;</a> ';
  storindex=3;

}

function stories4(){
  document.getElementById('innerind').innerHTML='<div id="stories">Stories</div><b><br>Orlando Dog Rescued With 100 Pellets in His Body Is Getting the Happy Ending He Deserves</b><br> <br><img id="stray2" src="./pictures/888.jpeg"> <br> <br>Things are only getting better for Teddy, who\'s now loving life at his new foster home.<br><a href="https://www.dailypaws.com/pet-news-entertainment/adoption-stories/orlando-dog-teddy-rescued-with-100-pellets-in-his-body">Read more &#8702;</a> '
  storindex=4;

}


function storiesr(){
  if (storindex==1){
    stories2();
    return false;
  }
  if (storindex==2){
    stories3();
    return false;

  }
  if (storindex==3){
    stories4();
    return false;

  }
  if (storindex==4){
    stories1();
    return false;

  }
}

function storiesl(){
  if (storindex==1){
    stories4();
    return false;

  }
  if (storindex==2){
    stories1();
    return false;

  }
  if (storindex==3){
    stories2();
    return false;

  }
  if (storindex==4){
    stories3();
    return false;

  }
}
