

-- regions

insert into regions (region) values ('Toshkent shaxri'), ('Toshkent viloyati'), ('Farg''ona viloyati'), ('Andijon viloyati'), ('Namangan viloyati'), ('Samarqand viloyati'), ('Qashqadaryo viloyati'), ('Surxandaryo viloyati'), ('Jizzax viloyati'), ('Buxoro viloyati'), ('Xorazm viloyati'), ('Navoiy viloyati'), ('Sirdaryo viloyati'), ('Qoraqalpog''iston Respublikasi');


-- users

insert into users (fullname, username, contact, password, gender, region_id) values ('Azimov Abdumannon', 'Kingsman', '998905703369', crypt('123456789', gen_salt('bf')), 'male', 3);


-- subjects

insert into subjects (subject) values ('Matematika'), ('Fizika'), ('Ingliz tili'), ('Kimyo'), ('Biologiya');



-- unversities

insert into unversities (unversity) values ('Toshkent axborot texnologiyalari unversiteti'), ('Toshkent davlat texnika unversiteti'), ('Toshkent moliya instituti'), ('Toshkent tibbiyot akademyasi'), ('Toshkent milliy unversiteti'), ('Toshkent pediatriya tibbiyot instituti');



-- faculties

insert into faculties (faculty, grands, contracts, grand_mark, contract_mark, subject_1, subject_2, unversity_id) values ('Axborot xavfsizligi', 20, 80, 168.0, 125.0, 1, 2, 1), ('Dasturiy injeniring', 35, 100, 137.6, 108.2, 1, 2, 1), ('Telekominakatsiya texnologiyalari', 65, 87, 142.8, 92.4, 1, 3, 1), ('Avtomobilsozlik va traktorsozlik', 7, 68, 118.7, 73.5, 1, 2, 2), ('Menejment', 5, 20, 156.5, 126.0, 1, 3, 2), ('Iqtisodiyot', 3, 10, 182.7, 158.6, 1, 3, 3), ('Davolash ishi', 23, 5, 164.9, 132.2, 4, 5, 4), ('Tibbiy profilaktika ishi', 12, 85, 142.8, 127.1, 4, 5, 4), ('Amaliy matematika', 14, 36, 165.9, 126.0, 1, 2, 5), ('Kimyo', 43, 132, 131.3, 78.8, 4, 5, 5), ('Menejment', 3, 27, 169.1, 134.4, 1, 3, 5), ('Biologiya', 24, 51, 133.4, 114.5, 4, 5, 5), ('Fizika', 50, 140, 156.5, 92.4, 1, 2, 5), ('Nintaqviy iqtisodiyot', 5, 25, 179.6, 159.6, 1, 3, 5), ('Davolash ishi', 10, 75, 162.8, 144.9, 4, 5, 6), ('Pediatriya ishi', 25, 175, 162.8, 140.7, 4, 5, 6);


-- tests (matematika)

insert into tests (test_question, test_variants, test_answer, subject_id) values 
('Quyidagi yig''indining ohirgi raqamini toping: 1!+2!+3!+…+25!', '{"3", "4", "5", "6"}', '3', 1), 

('Quyidagi yig''indining ohirgi raqamini toping: 1!+2!+3!+…+25!', '{"3", "4", "5", "6"}', '3', 1), 
('x^3-36(x)^2-36x+63 ifodaning x=37 nuqtadagi qiymatini toping.', '{"0", "2768", "100", "63"}', '100', 1),
('|x-3| + |x+4| = 5 tenglama haqidagi mulohazalardan qaysi biri to''g''ri.', '{"Faqat bitta ildizi bor", "Ildizlari turli ishorali", "ildizi yo''q", "Har ikkala ildizi manfiy"}', 'ildizi yo''q', 1), 
('AOB markaziy burchak AB yoyga tiralgan ichki chizilgan burchagidan 30° ga ortiq. Ichki chizilgan burchak nimaga teng.', '{"30°", "40°", "20°", "50°"}', '30°', 1),
('Qaysi son katta. A=1*2*3...*20  mi B=1+2+3+…+1000000 mi', '{"A=B", "A>B", "A<B", "A^2=B"}', 'A>B', 1),
('Tenglamani yeching: 8(x+2)-6=7-(5-8x)', '{"-2", "0.5", "1.6", "ildizga ega emas"}', 'ildizga ega emas', 1),
('Ifodaning son qiymatini toping: S=2(ab+ac+bc) bunda:a=5,  b=6.4,  c=4.5', '{"50.45", "83.3", "166.6", "109"}', '166.6', 1),
('Teng yonli uchburchakning perimetri 48, yon tomoni 18 ga teng.Uning asosini toping?', '{"15", "12", "16", "18"}', '12', 1),
('Tenglamani eching: 1+7+13+19+…+X=280', '{"55", "33", "44", "66"}', '55', 1),
('Agar a+b+c=0 bo''lsa, a^3+b^3+c^3 ni qiymatini toping', '{"3abc", "3(a^2)bc", "3a(b^2)c", "3ab(c^2)"}', '3abc', 1),
('2^99+2^9 yigindini 100 ga bo''lgandagi qoldiqni toping.', '{"13", "6", "11", "0"}', '0', 1),
('Hisoblang: 1-2+3-4+…+1993-1994+', '{"1995", "2889", "2990", "998"}', '998', 1),
('Teng yonli uchburchakning ikki tomoni 8 va 3 ga teng.Uning uchinchi tomonini toping?', '{"5", "8", "11", "9"}', '8', 1),
('Tomonlari 3m, 4m va 5m bo''lgan uchburchakka tashqi chizilgan aylananing radiusi necha metr?', '{"12.5", "2.3", "2.5", "3"}', '2.5', 1);





-- tests (fizika)

insert into tests (test_question, test_variants, test_answer, subject_id) values 
('m massali jismning pastga tik a tezlanish bilan harakatlangan. Uning og''irligi qaysi ifodada to''g''ri keltirilgan?', '{"P=mg+ma", "P=mg ", "P=mg-ma", "F=ma"}', 'P=mg-ma', 2),
('Birinchi kosmik tezlik nimaga teng', '{"11.2km/s", "7.9km/s", "16.7km/s", "72.7km/s"}', '7.9km/s', 2),
('Prujina ustiga o''rnatilgan tayanchga 70g massali jism qo''yilgan. Muvozanat holatga jismning og''rligi nimaga teng bo''ladi? ', '{"0.7N", "70N", "7N", "700N"}', '700N', 2),
('Bola aravachani harakat yo''nalishida 35N kuch bilan itarib 50m masofaga olib bordi. Bunda bola qancha ishni bajargan?', '{"35J", "50J", "85J", "1750J"}', '1750J', 2),
('Matematik  mayatnik 20s ichida 40 marta tebranadi. Mayatnikning tebranich davrini toping.', '{"800s", "2s", "1s", "0.5s"}', '0.5s', 2),
('Moddiy nuqta 10 sekundda 25 marta tebrandi >Tebranish davri qanchaga teng.', '{"2s", "10s", "0.4", "0.5s"}', '0.4s', 2),
('Katta bo''lmagan tezliklarda suyuqlik bir-biriga nisbatan ko''chmasdan sirpanadigan qatlamlarga bo''linib oqadigan oqim qanday nomlanadi?', '{"Turbulent", "Uyurma", "Laminar", "Bo''ylama"}', 'Laminar', 2),
('20°C da havoda tovush tezligi qanchaga teng?', '{"3.34m/s", "334m/s", "33.4m/s", "343m/s"}', '343m/s', 2),
('Massasi 150g bo''lgan tosh 6m/s tezlik bilan gorizantal otildi. Otilish vaqtida toshning inpulsi qanch bo''lgan ?', '{"600kg m/s", "6kg m/s", "0.15kg m/s", "0.9kg m/s"}', '0.9kg m/s', 2),
('Oy Yerdan 384400km balandlikda orbita bo''ylab aylanmoqda. Yerga nisbatan oyning tezligini toping.', '{"7.9km/s", "5.2km/s", "3.6km/s", "1km/s"}', '1km/s', 2),
('Mars uchun birinchi kosmik tezlikni hisoblang.Planetaning radiusi 3380km .Erkin tushish tezlanishi 3,86m/s^2', '{"4km/s", "2.8km/s", "3.6km/s", "5km/s"}', '4km/s', 2),
('Prujina 1N kuch ta''sirida 2sm uzaygan.Bikirligini toping.', '{"50Nm", "0.5Nm", "2Nm", "Javob yuq"}', '50Nm', 2),
('Mashina shimol tomonga 40km yo''l bosib keyin sharqqa burilib yana 30km yurgan .Otgan yo''lni va ko''chishni aniqlang ', '{"S=40km Sk=30km", "S=70km Sk=120km", "S=30km Sk=50km", "Javob yuq"}', 'Javob yuq', 2),
('Moddiy nuqta 5s davomida 30 marta aylangan.Aylanish chastotasi nimaga teng?', '{"150", "30", "6", "Javob yuq"}', '6', 2),
('Massasi 0.5 kg bo''lgan koptokga 0.02 s davomida zarb berilgandan keyin u 10m/s tezlik oladi.Zarbning o''rtacha kuchini toping?', '{"0.25N", "250N", "25N", "Javob yuq"}', '250N', 2);






-- tests (Ingliz tili)

insert into tests (test_question, test_variants, test_answer, subject_id) values
('Our  homework______ very   difficult  yesterday,but  today  It _____easy.', '{"Was/is", "Were/is", "Will/like", " Was/was"}', 'Was/is', 3),
('The  weather____nice  today,  but  it  _____nasty  yesterday.', '{"Is/was", "Are/was", "Isn''t/were", "Was/was"}', 'Is/was', 3),
('Has   she  done  her  homework _____?', '{"Alredy", "Just", "yet", "At  the  moment"}', 'yet', 3),
('Ann ______to  be  an  artist.', '{"likeness", "would", "likes", "wants"}', 'wants', 3),
('We  got  up  late______Sunday  morning', '{"at", "on", "in", "inside"}', 'on', 3),
('I''ll  stay  here ... Monday', '{"of", "still", "till", "too"}', 'till', 3),
('_______to  a rock  concert?', '{"Have  you  ever  been", "Do  you  ever  go", "Had  you  saw", "Have  ever  go"}', 'Have  you  ever  been', 3),
('He  drives  too______', '{"fast", "faster", "fastest", "fastly"}', 'fastest', 3),
('How  many  children_____they____?', '{"Has/got", "Does/got", "Have/get", "Have/got"}', 'Have/got', 3),
('She  _____ travelled  to  most  parts  of  the  world.', '{"has", "does", "have", "did"}', 'has', 3),
('I''m  looking  forward_____more  free  time.', '{"Of having", "Having", "To having", "To have"}', 'To having', 3),
('Lucy''s  mum  _______live  in  Japan,but  now  she  _______in  Uzbekistan.', '{"Don''t/did", "Is going to/wants to living Is going to/wants to living", "Used to/lives", "Used to/lives"}', 'Used to/lives', 3),
('I_________to  London  next  year', '{"was going", " is going", "were going", "am going"}', 'am going', 3),
('When  I_____, my  mum _____in  the  house.', '{"Came/was sleeping", "Come/were sleeping", "Are/are doing", "Is/is going"}', 'Came/was sleeping', 3),
('How  old _________you  in1990? I  _______10,but  now  I  _____25', '{"Was/was/am", "Were/was/am", "Were/were/am", "Are/was/is"}', 'Were/was/am', 3);






-- tests (Kimyo)

insert into tests (test_question, test_variants, test_answer, subject_id) values
('Avogadro doimiysini ifodalovchi sonni ko''rsating', '{"6.02*10^(-23)", "6.02*10^(23)", "6.02*10^(25)", "6.02*10^(20)"}', '6.02*10^(-23)', 4),
('Ham metallarga, ham metallmaslarga xos bo''lgan amfoter xossaga ega elementlar qatorini ko''rsating.', '{"rux va alyuminiy", "magniy va kaliy", "mis va xrom", "natriy va temir"}', 'rux va alyuminiy', 4),
('Asoslar suvda erish va erimasligiga qarab nechaga bo''linadi?', '{"6", "2", "4", "3"}', '2', 4),
('Oddiy moddani ko''rsaying?', '{"vodorod xlorid", "ammiak", "vodorod", "metan"}', 'vodorod', 4),
('Normal sharoitda 11,2 litr oltingugurt (IV)-oksid olish uchun qancha oltingugurtni yoqish kerak?', '{"64", "16", "32", "24"}', '16', 4),
('Kislota eritmasi quyidagi indikatorlarning qaysilari ta''sirida qizaradi? ', '{"Lakmus", "Lakmus va Metil zarg''aldog''i", "Lakmus va Fenoftalein", "Fenoftalein va Metil zarg''aldog''i"}', 'Lakmus va Metil zarg''aldog''i', 4),
('Yoritish  chiroqlarida  ishlatiladigan argon  izotoplarining   yadrolarida   nechta  prton  va  neytron  bor?', '{"6", "14", "18", "12"}', '18', 4),
('Quyidagi birikmalardan qaysi biri ion bog`lanishli birikma?', '{"F2", "HF", "KF", "HCOOH"}', 'HF', 4),
('Kuchsiz asos va kuchli kislotadan hosil bo''lgan tuzlarning suvdagi eritmasining muhiti qanday bo''ladi?', '{"Ishqoriy", "Asosli", "Neytral", "Kislotali"}', 'Kislotali', 4),
('8-guruhcha elementlari qanday nom bilan nomlanadi?', '{"Galogenlar", "Inert gazlar", "Lantanoidlar", "Ishqorlar"}', 'Inert gazlar', 4),
('Xlorning tartib raqami nechaga teng?', '{"16", "17", "28", "35"}', '17', 4),
('Reaksiyaning tezlik koeffitsienti 3 ga teng bo''lganda harorat 50°C dan 70°C ga ko''tarilganda reaksiya tezligi necha marta ortadi?', '{"11", "9", "15", "135"}', '9', 4),
('Erkin holda azot  havoda qacha og''irlik jihaydan  necha % ni tashkil etadi?', '{"29%", "28%", "78%", "75.5%"}', '75.5%', 4),
('Necha xil fosfor mavjud?', '{"5", "3", "4", "2"}', '2', 4),
('H3PO4 ning nomini aniqlang?', '{"Nitrit kislota", "Natriy nitrat", "Ortofosfat kislota", "Sulfat kislota"}', 'Ortofosfat kislota', 4);



-- tests (Biologiya)

insert into tests (test_question, test_variants, test_answer, subject_id) values
('Biologiyani o`rganish usullari qaysilar?', '{"Eksperimental, ekologik", "Kuzatish, laboratoriya, nazariy", "Tarixiy, nazariy, eksperimental", "Kuzatish, tarixiy, eksperimental"}', 'Kuzatish, tarixiy, eksperimental', 5),
('Tirik organizmlarga xos belgilar qaysilar?', '{"Yemirilish, harakatlanish", "Harakatlanish, moddalar almashinuvi", "Ko`payish, ta`sirlanish", "Qo`zg`aluvchanlik, o`z-o`zini boshqarish, ko`payish"}', 'Qo`zg`aluvchanlik, o`z-o`zini boshqarish, ko`payish', 5),
('Qaysi kasalliklarda emlash yo`li bilan profilaktika olib boriladi?', '{"Radikulit, jigar kasalliklari", "Xolera, o`lat,ichburug`", "Ko`k yo`tal, qaqshal, defteriya", "Pneomaniya, gepatit"}', 'Ko`k yo`tal, qaqshal, defteriya', 5),
('Zamburug`lar vegetativ meva tanasini nima tashkil qiladi?', '{"Tallom", "Mitsiliy", "Sporafit", "Rizoid"}', 'Mitsiliy', 5),
('Hujayra massasining necha foizini makroelementlar tashkil qiladi?', '{"75%", "95%", "70%", "98%"}', '98%', 5),
('Suv hujayrada qanday ahamiyatga ega?', '{"Ichki muhit doimiyligini saqlaydi", "Hujayrada moddalar almashinuvi ta`minlaydi", "Erituvchu, H2 bog`lar hosil qiladi, Transport", "Aminokislotalar almashinuvini ta`minlaydi"}', 'Erituvchu, H2 bog`lar hosil qiladi, Transport', 5),
('Oqsillar qanday tarkibiy qismga ega?', '{"Aminokislotalar, radikal", "Radikal, aminoguruh", "Karboksil guruh, radikal", "Aminoguruh, karboksil guruh"}', 'Aminokislotalar, radikal', 5),
('Prokariotlarning hujayra qobig''i qanday moddadan tuzilgan?', '{"Murein", "Murein va Pektin", "Xitin", "Pektin"}', 'Murein va Pektin', 5),
('O`lat bakteriyalari qanday tarqaladi?', '{"Kemiruvchilarda yashovchi burgalar orqali", "Bitlar orqali", "Suv orqali", "Elimentar yo`llar bilan"}', 'Kemiruvchilarda yashovchi burgalar orqali', 5),
('O`simlik hujayrasining sitoplazmatik membranasiga nima deyiladi?', '{"Kapsula", "Sellyuloza", "Kutikula", "Xitin qobiq"}', 'Sellyuloza', 5),
('Nuklein kislotalarning asosiy funksiyasi nimadan iborat?', '{"ATFni sintezlash", "Oqsilni sintezlash, energiya to`plash", "Irsiy belgilarnisaqlash va nasldan-naslga o`tkazish", "Ko`payish va oqsilni sintezlash"}', 'Irsiy belgilarnisaqlash va nasldan-naslga o`tkazish', 5),
('Oqsillar tarkibidagi azotning miqdorini toping', '{"1.6%", "61%", "78.9%", "6.1%"}', '78.9%', 5),
('Transkripsiya jarayoni hujayraning qaysi qismida amalgam oshadi?', '{"Sitoplazmada", "Yadrochada", "Yadroda", "Membranada"}', 'Sitoplazmada', 5),
('Oqsil va moy to''plashi mumkin bo''lgan plastidalar', '{"Xloroplastlar", "Leykoplastlar", "Xromoplastlar", "Hammasi"}', 'Hammasi', 5),
('B12 vitaminining zaruriy tarkibiy qismi bo''lgan elementni ko''rsating', '{"Zn", "Mg", "Co", "Fe"}', 'Co', 5);