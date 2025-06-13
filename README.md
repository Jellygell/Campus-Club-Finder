## Campus Club Finder

Campus Club Finder adalah aplikasi web single-page (SPA) yang dibuat menggunakan Vite + React, dengan React Router untuk navigasi halaman dan Tailwind CSS untuk styling yang responsif. Aplikasi ini membantu mahasiswa untuk menemukan, mengenal, dan bergabung dengan klub kampus.

# Teknologi yang digunakan:
-	Vite : Alat pengembangan dan build yang cepat (setup & bundling)
-	React : Library untuk UI (UI, state)
-	React Router DOM : Routing sisi-klien (navigasi)
-	Tailwind CSS : Utility-first CSS framework (styling)
-	localStorage : Menyimpan status klub yang telah diikuti

# Cara inisialisasi dan menjalankan:
1.	Clone Repository
git clone https://github.com/Jellygell/Campus-Club-Finder.git
cd campus-club-finder
2.	Install Dependencies
npm install
3.	Jalankan Development Server
npm run dev
4.	Buka di Browser
http://localhost:5173

# Daftar halaman aplikasi
# 1.	/ - Halaman Utama (HomePage)
Fitur:

•	Menampilkan pesan dan deskripsi singkat
•	Terdapat section yang menarik untuk mahasiswa tertarik untuk eksplor klub kampus
•	Terdapat button ‘Browse Clubs’ untuk navigasi ke Club List Page
•	Terdapat button ‘Learn More’ untuk navigasi ke About Page

# 2.	/clubs – Club List page
Fitur:

•	Menampilkan 5 klub dalam bentuk kartu (card).
•	Setiap kartu menampilkan:
-	Nama klub
-	Gambar klub
-	Deskripsi singkat
-	Button ‘View Details’ untuk melihat detail klub.
•	Terdapat dropdown atau tombol untuk mengurutkan klub berdasarkan nama:
-	Nama A-Z (ascending / dari A ke Z)
-	Nama Z-A (descending / dari Z ke A)
•	Terdapat toggle tampilan (view toggle) yang bisa mengganti tampilan antara:
-	Grid View: Menampilkan kartu dalam bentuk grid (seperti kotak-kotak).
-	List View: Menampilkan kartu dalam bentuk vertikal satu per satu (seperti daftar).

# 3.	/clubs/:clubId – Club Detail page
Fitur:

•	Menampilkan informasi berupa
-	Gambar klub
-	Nama klub
-	Deskripsi lengkap klub
-	Event yang akan datang dari klub tersebut.
•	Terdapat button ‘Join Club’ 
-	Jika belum bergabung:
o	Klik tombol untuk bergabung.
o	Status keikutsertaan disimpan di localStorage.
o	Muncul konfirmasi bahwa kamu telah bergabung.
-	Jika sudah bergabung:
•	Terdapat tulisan ‘You have joined this club!’ dan tombol disembunyikan.
•	Terdapat ‘Back to Clubs’ untuk kembali ke halaman Club List Page

# 4.	/about – About
Fitur: 

•	Berisi informasi terkait tujuan aplikasi, teknologi yang digunakan, dan lainnya.

# 5.	* – 404 Not Found
Fitur:

•	Menampilkan pesan bahwa halaman tidak ditemukan.
•	Terdapat ‘Go back Home’ untuk kembali ke halaman utama / home.
