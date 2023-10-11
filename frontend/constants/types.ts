export type StrapiImage = {
  height: number;
  width: number;
  url: string;
};

type BeritaAuthor = {
  firstname: string;
  lastname: string;
};

export type Jurusan = {
  id: number;
  nama: string;
  kode_jurusan: string;
};

export type Proker = {
  id: number;
  nama: string;
  tautan: string;
  created_at: string;
  updated_at: string;
};

export type Berita = {
  id: number;
  judul: string;
  author: string;
  pratinjau: string;
  konten: string;
  created_at: string;
};

export type Misi = {
  deskripsi: string;
  icon: StrapiImage;
};

export type SocialMedia = {
  nama: string;
  username: string;
  icon: StrapiImage;
  link: string;
};

export type Visi = {
  teks: string;
};

export type DetailBerita = {
  id: number;
  judul: string;
  cover: StrapiImage;
  author: BeritaAuthor;
  konten: string;
  pratinjau: string;
  created_at: string;
};
export type DetailProjects = {
  id: number;
  judul: string;
  cover: StrapiImage;
  author: BeritaAuthor;
  konten: string;
  pratinjau: string;
  created_at: string;
};

export type DivisiPengurus = {
  nama: string;
};

export type JabatanPengurus = {
  nama: string;
};

export type LogoKabinet = {
  untuk_layar: "desktop" | "tablet" | "mobile";
  gambar: StrapiImage;
};

export type Pengurus = {
  id: number;
  nama: string;
  angkatan: number;
  instagram: string;
  divisi: DivisiPengurus;
  foto: StrapiImage;
  jurusan: Jurusan;
  jabatan: JabatanPengurus;
};

export type HomepageContent = {
  subtitle_utama: string;
  tentang_bem_fasilkom: string;
};

export type LayananKami = {
  nama: string;
  icon: StrapiImage;
  link: string;
};

export type AspirasiDanAduan = {
  id: number;
  nama: string;
  email: string;
  tipe: "Aduan" | "Aspirasi";
  jurusan: string;
  pesan: string;
  status_aduan: StatusAduan;
  created_at: string;
};

export type StatusAduan = {
  id: number;
  status: string;
  urutan: number;
};
