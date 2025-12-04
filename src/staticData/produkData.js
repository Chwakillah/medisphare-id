// Import semua gambar produk
import img1 from "../assets/products/1.png";
import img2 from "../assets/products/2.png";
import img3 from "../assets/products/3.png";
import img4 from "../assets/products/4.png";
import img5 from "../assets/products/5.png";
import img6 from "../assets/products/6.png";
import img7 from "../assets/products/7.png";
import img8 from "../assets/products/8.png";
import img9 from "../assets/products/9.png";
import img10 from "../assets/products/10.png";
import img11 from "../assets/products/11.png";
import img12 from "../assets/products/12.png";
import img13 from "../assets/products/13.png";
import img14 from "../assets/products/14.png";
import img15 from "../assets/products/15.png";
import img16 from "../assets/products/16.png";
import img17 from "../assets/products/17.png";
import img18 from "../assets/products/18.png";
import img19 from "../assets/products/19.png";
import img20 from "../assets/products/20.png";
import img21 from "../assets/products/21.png";
import img22 from "../assets/products/22.png";
import img23 from "../assets/products/23.png";
import img24 from "../assets/products/24.png";
import img25 from "../assets/products/25.png";
import img26 from "../assets/products/26.png";
import img27 from "../assets/products/27.png";
import img28 from "../assets/products/28.png";
import img29 from "../assets/products/29.png";
import img30 from "../assets/products/30.png";
import img31 from "../assets/products/31.png";
import img32 from "../assets/products/32.png";
import img33 from "../assets/products/33.png";
import img34 from "../assets/products/34.png";
import img35 from "../assets/products/35.png";
import img36 from "../assets/products/36.png";
import img37 from "../assets/products/37.png";
import img38 from "../assets/products/38.png";
import img39 from "../assets/products/39.png";
import img40 from "../assets/products/40.png";
import img41 from "../assets/products/41.png";
import img42 from "../assets/products/42.png";
import img43 from "../assets/products/43.png";
import img44 from "../assets/products/44.png";
import img45 from "../assets/products/45.png";
import img46 from "../assets/products/46.png";
import img47 from "../assets/products/47.png";
import img48 from "../assets/products/48.png";
import img49 from "../assets/products/49.png";
import img50 from "../assets/products/50.png";
import img51 from "../assets/products/51.png";
import img52 from "../assets/products/52.png";
import img53 from "../assets/products/53.png";
import img54 from "../assets/products/54.png";
import img55 from "../assets/products/55.png";
import img56 from "../assets/products/56.png";
import img57 from "../assets/products/57.png";
import img58 from "../assets/products/58.png";
import img59 from "../assets/products/59.png";
import img60 from "../assets/products/60.png";

// Data produk
const products = [
  // --- TABLET ---
  {
    id: 1,
    name: "Amoxicillin",
    category: "Tablet",
    specific_category: "Antibiotik Penisilin",
    price: 35000,
    description: "Obat antibiotik yang efektif untuk mengatasi berbagai infeksi bakteri, seperti infeksi saluran pernapasan, THT, kulit, hingga infeksi saluran kemih. Bekerja dengan menghentikan pertumbuhan bakteri sehingga mempercepat pemulihan. Cocok sebagai terapi lini pertama.",
    image: img1
  },
  {
    id: 2,
    name: "Azithromycin",
    category: "Tablet",
    specific_category: "Antibiotik Makrolida",
    price: 60000,
    description: "Antibiotik spektrum luas yang bekerja cepat untuk infeksi saluran pernapasan, radang tenggorokan, bronkitis, infeksi kulit, serta infeksi menular seksual tertentu. Dosis hariannya praktis karena diminum hanya 1 kali sehari.",
    image: img2
  },
  {
    id: 3,
    name: "Cefuroxime Axetil",
    category: "Tablet",
    specific_category: "Sefalosporin Generasi II",
    price: 85000,
    description: "Antibiotik generasi kedua yang memiliki efektivitas tinggi terhadap bakteri penyebab sinusitis, pneumonia, dan infeksi kulit. Banyak direkomendasikan dokter sebagai terapi lanjutan bila antibiotik lain kurang efektif.",
    image: img3
  },
  {
    id: 4,
    name: "Cetrizen Hydrochloride",
    category: "Tablet",
    specific_category: "Antihistamin Non-Sedatif",
    price: 25000,
    description: "Antihistamin yang cepat meredakan gatal, bersin, biduran, dan gejala alergi lainnya tanpa menyebabkan kantuk berat. Efeknya bertahan hingga 24 jam sehingga nyaman digunakan.",
    image: img4
  },
  {
    id: 5,
    name: "Clavamox",
    category: "Tablet",
    specific_category: "Antibiotik Kombinasi",
    price: 110000,
    description: "Kombinasi antibiotik (Amoxicillin + Clavulanic Acid) yang dirancang untuk melawan bakteri yang resisten. Sangat efektif untuk infeksi saluran napas, kulit, dan gigi. Pilihan tepat ketika infeksi tidak membaik dengan antibiotik biasa.",
    image: img5
  },
  {
    id: 6,
    name: "Phenylephrine Hydrochloride",
    category: "Tablet",
    specific_category: "Dekongestan",
    price: 18000,
    description: "Dekongestan yang membantu melegakan hidung tersumbat akibat flu atau sinusitis. Membantu Anda bernapas lebih lega dan tidur lebih nyaman.",
    image: img6
  },
  {
    id: 7,
    name: "Dextromethorpan",
    category: "Tablet",
    specific_category: "Antitusif",
    price: 15000,
    description: "Obat batuk kering yang bekerja menekan refleks batuk sehingga membantu mengurangi frekuensi batuk, terutama saat malam hari.",
    image: img7
  },
  {
    id: 8,
    name: "Erythromycin",
    category: "Tablet",
    specific_category: "Antibiotik Makrolida",
    price: 70000,
    description: "Antibiotik pilihan bagi penderita alergi penisilin. Efektif untuk infeksi kulit, tenggorokan, saluran napas, hingga infeksi kelamin tertentu.",
    image: img8
  },
  {
    id: 9,
    name: "Ethambutol",
    category: "Tablet",
    specific_category: "Obat Anti Tuberkulosis",
    price: 55000,
    description: "Digunakan sebagai bagian dari terapi kombinasi untuk tuberkulosis. Membantu menghentikan pertumbuhan bakteri penyebab TBC.",
    image: img9
  },
  {
    id: 10,
    name: "Pseudoephedrine Hydrochloride",
    category: "Tablet",
    specific_category: "Dekongestan",
    price: 28000,
    description: "Dekongestan kuat yang meredakan hidung tersumbat akibat alergi atau flu. Efek bekerja cepat dan bertahan lama untuk kenyamanan aktivitas harian.",
    image: img10
  },
  {
    id: 11,
    name: "Guaifenesin",
    category: "Tablet",
    specific_category: "Ekspektoran",
    price: 18000,
    description: "Membantu mengencerkan dahak sehingga lebih mudah dikeluarkan. Cocok untuk batuk berdahak dan infeksi saluran napas atas.",
    image: img11
  },
  {
    id: 12,
    name: "Ibuprofen",
    category: "Tablet",
    specific_category: "NSAID",
    price: 35000,
    description: "Obat antiinflamasi yang efektif untuk mengatasi nyeri seperti sakit kepala, nyeri haid, sakit gigi, serta peradangan seperti radang sendi. Juga membantu menurunkan demam.",
    image: img12
  },
  {
    id: 13,
    name: "Isoniazid",
    category: "Tablet",
    specific_category: "Obat Anti Tuberkulosis",
    price: 25000,
    description: "Obat utama dalam terapi tuberkulosis yang bekerja menghentikan pertumbuhan bakteri secara langsung. Digunakan dalam kombinasi OAT lainnya.",
    image: img13
  },
  {
    id: 14,
    name: "Loratadine",
    category: "Tablet",
    specific_category: "Antihistamin",
    price: 28000,
    description: "Antihistamin generasi baru yang meredakan alergi tanpa menyebabkan kantuk. Efektif untuk rhinitis alergi, urtikaria, dan gatal kulit.",
    image: img14
  },
  {
    id: 15,
    name: "Paracetamol",
    category: "Tablet",
    specific_category: "Analgesik – Antipiretik",
    price: 20000,
    description: "Obat pilihan pertama untuk menurunkan demam dan meredakan nyeri ringan hingga sedang. Aman digunakan segala usia dengan dosis yang sesuai.",
    image: img15
  },
  {
    id: 16,
    name: "Pyrazinamide",
    category: "Tablet",
    specific_category: "OAT",
    price: 40000,
    description: "Bagian penting dari terapi TBC fase awal. Bekerja membunuh bakteri penyebab tuberkulosis secara cepat.",
    image: img16
  },
  {
    id: 17,
    name: "Rifampicin",
    category: "Tablet",
    specific_category: "OAT",
    price: 30000,
    description: "Obat utama untuk tuberkulosis yang bekerja membunuh bakteri secara efektif. Digunakan bersamaan dengan OAT lain.",
    image: img17
  },
  {
    id: 18,
    name: "Ketoconazole",
    category: "Tablet",
    specific_category: "Antijamur",
    price: 25000,
    description: "Mengatasi infeksi jamur kulit seperti kurap, panu, dan kandidiasis. Juga tersedia dalam bentuk shampoo untuk ketombe berat.",
    image: img18
  },
  {
    id: 19,
    name: "Ranitidine HCl",
    category: "Tablet",
    specific_category: "Antasida / H2 Blocker",
    price: 22000,
    description: "Obat yang mengurangi produksi asam lambung, cocok untuk asam lambung tinggi, gastritis, dan refluks.",
    image: img19
  },

  // --- SIRUP ---
  {
    id: 20,
    name: "Ambroxol",
    category: "Sirup",
    specific_category: "Mukolitik",
    price: 18000,
    description: "Melancarkan pengeluaran dahak dan meredakan batuk berdahak. Bekerja mengencerkan lendir di saluran napas.",
    image: img20
  },
  {
    id: 21,
    name: "Profed",
    category: "Sirup",
    specific_category: "Dekongestan Kombinasi",
    price: 35000,
    description: "Obat flu kombinasi yang membantu meredakan hidung tersumbat, bersin, dan rasa tidak nyaman akibat alergi atau flu. Mengandung dekongestan yang bekerja cepat membuka saluran napas.",
    image: img21
  },
  {
    id: 22,
    name: "Salbutamol Sulphate",
    category: "Sirup",
    specific_category: "Bronkodilator",
    price: 25000,
    description: "Obat pelega napas yang bekerja cepat untuk mengatasi sesak akibat asma atau bronkospasme. Efeknya terasa dalam hitungan menit.",
    image: img22
  },
  {
    id: 23,
    name: "Amoxicillin",
    category: "Sirup",
    specific_category: "Antibiotik Penisilin",
    price: 38000,
    description: "Versi sirup dari Amoxicillin yang mudah dikonsumsi anak-anak. Efektif mengatasi infeksi bakteri pada saluran napas, THT, dan kulit.",
    image: img23
  },
  {
    id: 24,
    name: "Azithromycin Dihydrate",
    category: "Sirup",
    specific_category: "Antibiotik Makrolida",
    price: 65000,
    description: "Varian azithromycin cair yang memiliki kestabilan lebih baik. Efektif untuk mengatasi radang tenggorokan, infeksi paru, dan infeksi kulit. Dosis mudah diminum sekali sehari.",
    image: img24
  },
  {
    id: 25,
    name: "Cefumed (Cefuroxime Axetil)",
    category: "Sirup",
    specific_category: "Sefalosporin Generasi II",
    price: 90000,
    description: "Antibiotik sirup generasi kedua untuk mengatasi infeksi bakteri yang lebih kuat seperti pneumonia, sinusitis, otitis media, dan infeksi kulit yang sulit sembuh.",
    image: img25
  },
  {
    id: 26,
    name: "Cetrilife (Cetrizene Hydrochloride)",
    category: "Sirup",
    specific_category: "Antihistamin",
    price: 30000,
    description: "Sirup antihistamin yang efektif meredakan alergi seperti gatal-gatal, urtikaria, dan pilek alergi. Tidak membuat kantuk berlebihan sehingga ideal digunakan sepanjang hari.",
    image: img26
  },
  {
    id: 27,
    name: "Glavoxy (Amoxicillin + Clavulanic Acid)",
    category: "Sirup",
    specific_category: "Antibiotik Kombinasi",
    price: 115000,
    description: "Kombinasi antibiotik kuat dalam bentuk sirup untuk infeksi bakteri yang sudah resisten. Sangat dianjurkan untuk infeksi parah seperti sinusitis berat dan tonsilitis.",
    image: img27
  },
  {
    id: 28,
    name: "Dextromethorpan",
    category: "Sirup",
    specific_category: "Antitusif",
    price: 15000,
    description: "Sirup penekan batuk kering yang mengganggu terutama saat tidur malam. Memberikan rasa tenang dan mengurangi keinginan batuk berulang.",
    image: img28
  },
  {
    id: 29,
    name: "Erythromycin",
    category: "Sirup",
    specific_category: "Antibiotik Makrolida",
    price: 75000,
    description: "Antibiotik sirup pilihan bagi anak-anak atau pasien yang alergi penisilin. Efektif untuk infeksi saluran napas dan kulit.",
    image: img29
  },
  {
    id: 30,
    name: "Paracetamol, Guaifenesin, Phenylephrin",
    category: "Sirup",
    specific_category: "Obat Flu Kombinasi",
    price: 22000,
    description: "Obat flu lengkap dalam bentuk sirup untuk membantu mengurangi demam, batuk berdahak, serta hidung tersumbat. Memberikan kenyamanan saat beraktivitas.",
    image: img30
  },
  {
    id: 31,
    name: "Ibuprofen",
    category: "Sirup",
    specific_category: "NSAID",
    price: 35000,
    description: "Sirup antiinflamasi dan penurun panas yang efektif untuk anak-anak. Cocok untuk demam tinggi, sakit gigi, dan nyeri ringan.",
    image: img31
  },
  {
    id: 32,
    name: "Loracare (Loratadine)",
    category: "Sirup",
    specific_category: "Antihistamin",
    price: 32000,
    description: "Antihistamin non-sedatif bentuk sirup yang membantu meredakan gejala alergi seperti kulit merah, gatal, bersin, hingga mata berair tanpa membuat mengantuk.",
    image: img32
  },

  // --- INFUS ---
  {
    id: 33,
    name: "Natrium Klorida",
    category: "Infus",
    specific_category: "Larutan Elektrolit",
    price: 10000,
    description: "Larutan infus steril (NaCl 0.9%) yang digunakan untuk rehidrasi, pengencer obat injeksi, atau kebutuhan medis lainnya.",
    image: img33
  },
  {
    id: 34,
    name: "Ibuprofen",
    category: "Infus",
    specific_category: "NSAID Injeksi/Infus",
    price: 45000,
    description: "Diberikan untuk mengatasi nyeri sedang hingga berat atau kondisi demam tinggi pada pasien yang tidak bisa minum obat oral.",
    image: img34
  },
  {
    id: 35,
    name: "Paracetamol",
    category: "Infus",
    specific_category: "Antipiretik Injeksi",
    price: 35000,
    description: "Diberikan melalui infus pada pasien dengan demam tinggi atau nyeri yang membutuhkan efek cepat atau tidak bisa menelan obat.",
    image: img35
  },
  {
    id: 36,
    name: "Levofloxacin",
    category: "Infus",
    specific_category: "Antibiotik Fluoroquinolone",
    price: 120000,
    description: "Antibiotik infus kuat untuk infeksi berat seperti pneumonia, ISK, sinusitis, dan infeksi jaringan lunak. Diserap cepat dan bekerja efektif.",
    image: img36
  },

  // --- INHALER & INTERNASAL ---
  {
    id: 37,
    name: "Brear (Albuterol Sulphate)",
    category: "Inhaler",
    specific_category: "Bronkodilator",
    price: 30000,
    description: "Inhaler yang bekerja cepat untuk meredakan sesak napas akibat asma, PPOK, atau bronkospasme. Cocok untuk pertolongan pertama.",
    image: img37
  },
  {
    id: 38,
    name: "Fluguard (Fluticasone)",
    category: "Inhaler",
    specific_category: "Kortikosteroid Nasal",
    price: 75000,
    description: "Spray hidung yang mengurangi peradangan dan gejala alergi seperti bersin, hidung gatal, serta hidung berair. Ampuh untuk rhinitis alergi.",
    image: img38
  },
  {
    id: 39,
    name: "Liner (Terbutaline Sulphate)",
    category: "Inhaler",
    specific_category: "Bronkodilator",
    price: 28000,
    description: "Bronkodilator inhalasi untuk mengatasi batuk mengi, sesak napas, dan gejala asma. Efeknya cukup cepat dan tahan lama.",
    image: img39
  },
  {
    id: 40,
    name: "Sone (Budesonide)",
    category: "Inhaler",
    specific_category: "Kortikosteroid Inhalasi",
    price: 85000,
    description: "Steroid inhalasi untuk mengontrol peradangan saluran napas pada pasien asma kronis. Membantu mencegah serangan sesak.",
    image: img40
  },
  {
    id: 41,
    name: "Decongen (Phenylephrine Hydrochloride)",
    category: "Internasal",
    specific_category: "Dekongestan",
    price: 18000,
    description: "Dekongestan yang membantu meredakan hidung tersumbat pada flu dan alergi. Bekerja cepat untuk membuka saluran napas.",
    image: img41
  },
  {
    id: 42,
    name: "Legah (Sodium Chloride)",
    category: "Internasal",
    specific_category: "Larutan Nasal",
    price: 20000,
    description: "Larutan saline untuk membersihkan hidung, melembapkan rongga hidung, dan membantu mengatasi hidung tersumbat secara alami.",
    image: img42
  },
  {
    id: 43,
    name: "Oxyde (Oxymetazoline HCl)",
    category: "Internasal",
    specific_category: "Dekongestan Nasal",
    price: 20000,
    description: "Spray hidung yang memberikan kelegaan cepat dari hidung tersumbat akibat flu, sinusitis, atau alergi. Efek bekerja dalam hitungan menit.",
    image: img43
  },
  {
    id: 44,
    name: "Oxyna (Oxymetazoline HCl)",
    category: "Internasal",
    specific_category: "Dekongestan Nasal",
    price: 22000,
    description: "Dekongestan nasal dengan daya kerja cepat untuk meringankan hidung tersumbat yang mengganggu aktivitas dan tidur.",
    image: img44
  },
  
  // --- TETES TELINGA ---
  {
    id: 45,
    name: "Phenol Glycerol 10%",
    category: "Tetes Telinga",
    specific_category: "Obat Tetes Telinga",
    price: 18000,
    description: "Digunakan untuk meredakan nyeri telinga dan membersihkan kotoran. Memiliki efek antiseptik ringan untuk mencegah infeksi.",
    image: img45
  },

  // --- INJEKSI ---
  {
    id: 46,
    name: "Amoxicillin Sodium",
    category: "Injeksi",
    specific_category: "Antibiotik Injeksi",
    price: 40000,
    description: "Diberikan untuk infeksi bakteri berat seperti pneumonia, infeksi kulit dalam, dan infeksi saluran kemih yang membutuhkan penanganan cepat.",
    image: img46
  },
  {
    id: 47,
    name: "Azithromycin",
    category: "Injeksi",
    specific_category: "Antibiotik Injeksi",
    price: 75000,
    description: "Digunakan untuk pneumonia berat, infeksi kulit parah, dan pasien yang butuh terapi makrolida cepat via injeksi.",
    image: img47
  },
  {
    id: 48,
    name: "Ceftriaxone Sodium",
    category: "Injeksi",
    specific_category: "Sefalosporin Generasi III",
    price: 25000,
    description: "Antibiotik spektrum luas yang sering digunakan di IGD dan rawat inap untuk infeksi berat seperti sepsis, meningitis, dan pneumonia berat.",
    image: img48
  },
  {
    id: 49,
    name: "Cefuroxime Sodium",
    category: "Injeksi",
    specific_category: "Sefalosporin Generasi II",
    price: 20000,
    description: "Berguna untuk infeksi sedang hingga berat seperti infeksi perut, kulit, paru, dan saluran kemih.",
    image: img49
  },
  {
    id: 50,
    name: "Decongen (Phenylephrine Hydrochloride)",
    category: "Injeksi",
    specific_category: "Vasopresor",
    price: 18000,
    description: "Digunakan untuk meningkatkan tekanan darah pada kondisi hipotensi, terutama saat anestesi.",
    image: img50
  },
  {
    id: 51,
    name: "Dexamethasone",
    category: "Injeksi",
    specific_category: "Kortikosteroid",
    price: 10000,
    description: "Mengatasi reaksi alergi berat, shock anafilaktik, radang hebat, hingga edema otak. Efek antiinflamasinya sangat kuat.",
    image: img51
  },
  {
    id: 52,
    name: "Erythromycin",
    category: "Injeksi",
    specific_category: "Antibiotik Makrolida",
    price: 55000,
    description: "Dipakai untuk infeksi bakteri yang cukup berat, terutama pada pasien yang alergi terhadap penisilin.",
    image: img52
  },
  {
    id: 53,
    name: "Methylprednisolone",
    category: "Injeksi",
    specific_category: "Kortikosteroid",
    price: 28000,
    description: "Steroid injeksi untuk peradangan berat, asma eksaserbasi, alergi berat, dan kondisi autoimun.",
    image: img53
  },
  {
    id: 54,
    name: "Ibuprofen",
    category: "Injeksi",
    specific_category: "NSAID Injeksi",
    price: 45000,
    description: "Obat injeksi untuk mengatasi nyeri sedang hingga berat dan demam ketika rute oral tidak memungkinkan.",
    image: img54
  },
  {
    id: 55,
    name: "NaCl 3%",
    category: "Injeksi",
    specific_category: "Elektrolit Hipertonik",
    price: 15000,
    description: "Larutan hipertonik untuk menangani hiponatremia berat dan terapi khusus di ruang gawat darurat.",
    image: img55
  },
  {
    id: 56,
    name: "Dextrose Injection 10%",
    category: "Injeksi",
    specific_category: "Larutan Infus",
    price: 12000,
    description: "Larutan infus untuk memenuhi kebutuhan energi cepat serta menangani hipoglikemia ringan.",
    image: img56
  },
  {
    id: 57,
    name: "Mannitol 20%",
    category: "Injeksi",
    specific_category: "Diuretik Osmotik",
    price: 30000,
    description: "Obat untuk menurunkan tekanan otak (ICP) dan tekanan mata (IOP). Sering digunakan dalam kasus stroke atau cedera kepala.",
    image: img57
  },
  {
    id: 58,
    name: "Amino Acid IV Infusion",
    category: "Injeksi",
    specific_category: "Nutrisi Parenteral",
    price: 85000,
    description: "Nutrisi parenteral lengkap bagi pasien yang tidak bisa makan melalui mulut. Membantu pemulihan dan keseimbangan nutrisi tubuh.",
    image: img58
  },
  {
    id: 59,
    name: "Potassium Chloride Injection 10%",
    category: "Injeksi",
    specific_category: "Elektrolit Injeksi",
    price: 8000,
    description: "Untuk mengatasi kadar kalium rendah (hipokalemia) yang berisiko mengganggu fungsi jantung dan otot.",
    image: img59
  },
  {
    id: 60,
    name: "Glycerin 72%",
    category: "Injeksi",
    specific_category: "Agen Osmotik",
    price: 18000,
    description: "Memiliki sifat osmotik, digunakan untuk berbagai kebutuhan medis termasuk obstetri dan prosedur tertentu.",
    image: img60
  },
];

export default products;
