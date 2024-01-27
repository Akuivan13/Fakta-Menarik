var faktaMenarikList = [
    "Lebah dapat mengenali wajah manusia.",
    "Bulan tidak memiliki atmosfer, sehingga tidak memiliki suara.",
    "Kupu-kupu merasa dengan kaki mereka.",
    "Gajah adalah satu-satunya mamalia yang tidak dapat melompat.",
    "Mata manusia dapat membedakan lebih dari 10 juta warna.",
    "Binatang yang bisa melihat sinar ultraviolet: lebah, beberapa jenis burung, dan beberapa reptil.",
    "Kelinci dapat melihat hampir 360 derajat, tetapi memiliki titik buta tepat di depan hidung mereka.",
    "Pluto belum lagi mengorbit Matahari satu kali sejak ditemukan pada tahun 1930.",
    "Katak dapat melompat 50 kali panjang tubuh mereka dalam satu lompatan.",
    "Gajah laut dapat menyimpan lebih dari 1.000 galon air di gumpal hidung mereka.",
    "Singa tidur rata-rata 20 jam sehari.",
    "Cahaya matahari membutuhkan waktu sekitar 8 menit 20 detik untuk mencapai Bumi.",
    "Paus biru adalah hewan terbesar yang pernah ada di Bumi, bisa mencapai panjang lebih dari 30 meter.",
    "Dalam satu tahun, otak manusia dapat menghasilkan daya listrik yang cukup untuk menyalakan lampu kecil.",
    "Bintang laut tidak memiliki otak.",
    "Jerapah memiliki lidah yang sangat panjang, bisa mencapai panjang 45 sentimeter.",
    "Beruang kutub kiri-tangan.",
    "Semut tidur hanya sekitar 4 jam sehari.",
    "Satu sendok teh neutron bermassa lebih dari satu miliar ton.",
    "Gurita memiliki tiga jantung dan biru ketika mereka marah.",
    "Sebuah kelompok flamingo disebut sebagai flamboyance.",
    "Bumi beratnya sekitar 6.6 sextillion ton.",
    "Salmon dapat mengenali tempat kelahiran mereka dan kembali ke sana untuk bertelur.",
    "Ular anaconda dapat mencapai panjang lebih dari 9 meter.",
    "Jantung kolibri dapat berdetak hingga 1.200 kali per menit.",
    "Katak pohon dapat melompat 50 kali panjang tubuhnya dalam satu lompatan.",
    "Badak putih adalah mamalia terbesar kedua di darat setelah gajah.",
    "Katak kayu Australia memiliki lidah yang panjangnya dua kali lipat panjang tubuhnya.",
    "Setiap bintang laut memiliki dua perut.",
    "Penggerek esquimo memiliki 40 kata berbeda untuk salju.",
    "Beruang panda lebih suka tidur di pohon daripada di tanah.",
    "Burung robin dapat mendengar cacing di bawah tanah.",
    "Kepiting tidak memiliki otak di kepala, melainkan di bagian tengah tubuhnya.",
    "Kanguru tidak dapat melompat mundur, hanya ke depan.",
    "Kelinci dapat melompat lebih dari satu meter tingginya.",
    "Ubur-ubur tidak memiliki otak, darah, atau tulang.",
    "Burung kakatua dapat mengingat dan menggunakan kembali kata-kata yang diajarkan pada mereka.",
    "Kadal komodo adalah hewan karnivora terbesar di dunia.",
    "Kura-kura bisa bernapas melalui pantat mereka.",
    "Ular king cobra dapat mengangkat sepertiga tubuhnya dari tanah ketika berdiri.",
    "Badak hitam memiliki bibir yang lebar dan tajam, mirip dengan bibir bibir putih.",
    "Pinguin dapat melompat lebih tinggi daripada manusia.",
    "Burung cenderawasih memiliki warna yang sangat cerah dan ekor panjang yang unik.",
    "Bunglon dapat melihat dua arah sekaligus.",
    "Lumba-lumba adalah mamalia laut yang paling cerdas.",
    "Ular python bisa makan mangsa yang lebih besar dari kepalanya karena dapat meregangkan rahangnya.",
    "Panda merah adalah satu-satunya jenis beruang yang dapat memanjat pohon.",
    "Hamster bisa tidur sepanjang hari dan bangun hanya di malam hari.",
    "Kucing memiliki kemampuan untuk melompat lebih dari enam kali panjang tubuhnya dalam satu lompatan.",
    "Gajah dapat mengenali diri mereka sendiri pada cermin.",
    "Kucing memiliki 32 otot di setiap telinga mereka.",
    "Badak hitam dapat berlari hingga kecepatan 56 km/jam.",
    "Buaya dapat tidur sambil membuka mata mereka.",
    "Semut memiliki dua perut, satu untuk makan sendiri dan yang lainnya untuk membawa makanan untuk semut lainnya.",
    "Dewasa manusia rata-rata menghabiskan dua minggu hidupnya mencium pakaian.",
    "Burung betet dapat meniru suara manusia dan suara hewan lainnya.",
    "Burung bangau dapat terbang non-stop selama berhari-hari selama migrasi.",
    "Sumber daya alam bumi yang terbarukan termasuk matahari, angin, dan air.",
    "Hutan hujan tropis adalah rumah bagi lebih dari setengah spesies tumbuhan dan hewan di dunia.",
    "Hujan terjadi ketika tetesan air di awan berkumpul dan tumbuh cukup besar untuk jatuh ke tanah.",
    "Pohon-pohon di hutan menghasilkan oksigen selama proses fotosintesis.",
    "Satu pohon besar bisa memberikan oksigen yang cukup untuk empat orang dewasa setiap hari.",
    "Gurun terbesar di dunia adalah Gurun Sahara di Afrika.",
    "Gunung Everest adalah puncak tertinggi di dunia, mencapai ketinggian lebih dari 8.848 meter.",
    "Lautan mengandung sekitar 97% air di Bumi.",
    "The Great Barrier Reef di Australia adalah terumbu karang terbesar di dunia.",
    "Gunung berapi adalah hasil dari tekanan dan aktivitas magma di dalam bumi.",
    "Gurun Atacama di Chili adalah salah satu tempat terkering di dunia.",
    "Antartika adalah benua terdingin dan terkering di Bumi.",
    "Sungai Nil di Afrika adalah sungai terpanjang di dunia.",
    "Bintang yang bersinar paling terang di langit malam adalah Sirius.",
    "Komet adalah benda langit yang terdiri dari debu dan gas yang mengorbit Matahari.",
    "Satu-satunya planet yang berputar searah jarum jam adalah Venus.",
    "Katak dapat mengosongkan seluruh lambung mereka melalui mulut.",
    "Burung pipit dapat terbang lebih dari 1.600 kilometer dalam sehari ketika bermigrasi.",
    "Paus bungkuk dapat menghasilkan suara yang dapat terdengar hingga 800 kilometer jauhnya.",
    "Buaya dapat terus tumbuh sepanjang hidupnya.",
    "Dalam satu detik, Matahari menghasilkan energi yang cukup untuk memenuhi kebutuhan energi Bumi selama satu tahun.",
    "Rumah kaca di atmosfer membantu menjaga suhu Bumi tetap hangat.",
    "Es Greenland adalah satu-satunya es yang tersisa di dunia yang terletak di belahan bumi utara.",
    "Saturnus memiliki lebih dari 60 satelit yang diketahui.",
    "Awan-awan di Venus terbuat dari asam sulfur.",
    "Saturnus memiliki cincin yang terdiri dari partikel es dan batu.",
    "Hujan meteor terjadi ketika debu dan batuan angkasa masuk ke atmosfer Bumi dan terbakar.",
    "Jarak antara Matahari dan Pluto bisa memuat sekitar 150 planet Bumi yang sejajar.",
    "Galaksi Bima Sakti memiliki sekitar 100 miliar bintang.",
    "Rasi bintang Orion adalah salah satu rasi bintang paling terkenal di langit.",
    "Udara di Bumi terdiri dari sekitar 78% nitrogen dan 21% oksigen.",
    "Sekitar 70% permukaan Bumi tercakup oleh air.",
    "Saturnus adalah planet dengan cincin terindah di Tata Surya.",
    "Dalam satu jam, Matahari menghasilkan energi yang cukup untuk memenuhi kebutuhan energi manusia selama satu tahun.",
    "Einstein dianugerahi Hadiah Nobel Fisika pada tahun 1921 untuk penjelasannya tentang efek fotolistrik.",
    "Ada lebih dari 170 jenis biji kopi yang dikenal.",
    "Facebook didirikan oleh Mark Zuckerberg pada tahun 2004.",
    "Negara terkecil di dunia adalah Vatikan, yang hanya mencakup area sekitar 44 hektar.",
    "Pulau terbesar di dunia adalah Greenland.",
    "The Great Wall of China adalah struktur terpanjang yang pernah dibangun oleh manusia.",
    "Hindu Kush di Asia Tengah adalah salah satu pegunungan tertinggi di dunia.",
    "Leonardo da Vinci, seorang pelukis terkenal, juga seorang penemu dan ahli anatomi.",
    "Jaringan internet pertama kali diperkenalkan secara luas pada tahun 1990.",
    "Jarak rata-rata antara Bumi dan Bulan adalah sekitar 384.400 kilometer.",
    "Alexander Graham Bell adalah penemu telepon.",
    "Pulau terbesar di dunia adalah Greenland.",
    "Sahara adalah gurun terpanjang di dunia.",
    "Katak pohon dapat mengubah warna kulitnya untuk menyesuaikan dengan lingkungannya.",
    "Bintang laut memiliki mata di ujung setiap lengan mereka.",
    "Kucing memiliki rata-rata 32 otot di setiap telinganya.",
    "Gurun Atacama di Chili adalah tempat terkering di dunia.",
    "Angsa dapat mengingat wajah manusia dan menunjukkan emosi positif atau negatif terhadapnya.",
    "Paus biru dapat menghasilkan suara yang terdengar hingga 1.000 mil laut jauhnya."
    // Tambahkan fakta lainnya sesuai kebutuhan
    // ...
];


// PEMBATAS

function tampilkanFakta() {
    var faktaContainer = document.getElementById("faktaContainer");

    var faktaRandom = faktaMenarikList[Math.floor(Math.random() * faktaMenarikList.length)];

    faktaContainer.innerHTML = faktaRandom;
    faktaContainer.style.display = "block";
}

// SALIN FAKTA
function salinFakta() {
    var faktaContainer = document.getElementById("faktaContainer");
    var teksFakta = faktaContainer.innerText;

    navigator.clipboard.writeText(teksFakta).then(function() {
        alert("Fakta berhasil disalin ke papan klip!");
    }).catch(function(err) {
        console.error('Gagal menyalin teks: ', err);
    });
}
