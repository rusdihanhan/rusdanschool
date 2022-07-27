import React from "react"
import "./homepage.css"

import program from "./img/program.jpg"
import diskon15 from "./img/diskon15.jpg"
import diskon20 from "./img/diskon20.jpg"
import arduino from "./img/arduino.jpg"
import raspberry from "./img/raspberry.jpg"
import mikroprosesor from "./img/mikroprosesor.jpg"
import matlab from "./img/matlab.jpg"

const Homepage = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <div id="project_top_bar_wrapper">
                <div id="project_top_bar">
                <form action="#" method="get">
                    <input type="text" defaultValue="Search..." name="q" size={10} className="inputfield" title="searchfield" onfocus="clearText(this)" onblur="clearText(this)" />
                    <input type="submit" name="Search" defaultValue="Search" alt="Search" className="submitbutton" title="Search" />
                </form>
                </div>
            </div>

            <div id="project_banner_wrapper">
                <div id="project_banner">
                    <div id="project_site_title_section">
                    <div id="project_site_title">
                        <a href="#">RUSDAN SCHOOL<span>Belajar Bersama RUSDAN School</span></a>
                    </div>
                    </div>
                    <div id="project_banner_content">
                    <div className="header_01">RUSDAN Bimbingan Belajar Terbaik Se-Indonesia </div>
                    <p>"RUSDAN SCHOOL merupakan lembaga bimbingan belajar terbaik di daerah depok. Saat ini RUSDAN SCHOOL berada di Jl. Margonda Raya."</p>
                    </div>
                </div>
                <div id="project_menu_wrapper">
                    <div id="project_menu">
                    <ul>
                        <li><a href="#" className="current">Home</a></li>
                        <li><a href="#">Kegiatan</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Tentang Kami</a></li>
                        <li><a href="#">Kontak Kami</a></li>
                        <li><a href="#" className="last" onClick={() => setLoginUser({})} >Log Out</a></li>
                    </ul>
                    </div>
                    <div id="project_content_wrapper">
                    <div id="top" />
                    <div id="project_content">
                        <div className="column_w380_left">
                        <div className="header_02">PROGRAM YANG ADA DI RUSDAN SCHOOL </div>
                        <div className="image_wrapper">
                            <a href="#"><img src={program} /></a>
                        </div>
                        <p className="em_text">RUSDAN SCHOOL menerapkan pembelajaran coding berbasis proyek atau project base learning. Pada kursus coding ini, peserta bisa memilih ingin belajar secara offline atau online. Training akan dipandu oleh trainer secara langsung
                            melalui tatap muka dikelas bagi yang offline, dan untuk yang online peserta akan dipandu oleh trainer melalui conference menggunakan aplikasi zoom atau google meet.</p>
                        <p className="em_text">Kami menyediakan layanan khusus bagi peserta yang ingin belajar coding tetapi terkendala waktu dan jarak. RUSS&amp;CO adalah aplikasi kursus coding online berupa Video Course Coding yang bisa di akses dari mana saja dan kapan saja.
                            Video Course coding dibuat oleh Trainer yang berkualitas sehingga menghadirkan pembelajaran yang sangat mudah dipahami.</p>
                        </div>
                        <div className="column_w380_right">
                        <div className="header_02">KENAPA RUSDAN SCHOOL ?</div>
                        <div className="margin_bottom_20" />
                        <ul className="content_list_01">
                            <li>Pengajar Terbaik</li>
                            <p>Pengajar RUSDAN SCHOOL merupakan pengajar pilihan yang sudah dibekali dengan konsep revolusi belajar.</p><br />
                            <li>Fasilitas No.1</li>
                            <p>Fasilitas lengkap untuk membantu proses belajar kamu jadi si No.1.</p> <br />
                            <li>Konsep The King</li>
                            <p>Konsep The King membuat kamu bisa belajar coding dengan lebih cepat dan tepat.</p> <br />
                        </ul>
                        <div className="margin_bottom_20" />
                        <div className="section_w180 fl margin_right_20">
                            <img src={diskon15} />
                            <div className="header_04"><a href="#">Siswa Ranking</a></div>
                            <p>Untuk kamu yang masuk 5 besar di sekolah bakal dapet diskon tambahan lagi lho s.d 15%</p>
                        </div>
                        <div className="section_w180 fl">
                            <img src={diskon20} />
                            <div className="header_04"><a href="#">Pembayaran Lunas</a></div>
                            <p>Untuk kamu yang membayar lunas langsung, akan mendapatkan potongan harga sebesar 20%.</p>
                        </div>
                        <div className="cleaner" />
                        </div>
                        <div className="cleaner" />
                    </div>
                    <div id="bottom" />
                    </div>
                    <div id="project_footer_wrapper">
                    <div id="project_footer">
                        <div className="section_w195">
                            <div className="header_05">READ MORE</div>
                            <ul className="footer_menu_list">
                                <li><a href="#">Refund Policy</a></li>
                                <li><a href="#">Term and Condition</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                            </ul>
                            </div>
                            <div className="section_w195">
                            <div className="header_05">ALAMAT KAMI</div>
                            <ul className="footer_menu_list">
                                <li><a>JL. Margonda Raya No.39 Depok, Jawa Barat 16423</a></li>
                                <li><a href="#">Telp: (021) 990765</a></li>
                                <li><a href="#">WA: 089647383687</a></li>
                                <li><a href="#">Email: rus&amp;co@gmail.com</a></li>
                            </ul>
                            </div>
                            <div className="section_w195 section_w195_last">
                            <div className="header_05">FOLLOW KAMI</div>
                            <ul className="footer_menu_list">
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">LinkedIn</a></li>
                                <li><a href="#">TikTok</a></li>
                            </ul>
                            </div>
                            <div className="section_w330">
                                <div className="header_05">Photo Gallery</div>
                                <ul className="gallery">
                                    <li>
                                    <a href="#"><img src={arduino} alt="image" /></a>
                                    </li>
                                    <li>
                                    <a href="#"><img src={raspberry} alt="image" /></a>
                                    </li>
                                    <li>
                                    <a href="#"><img src={mikroprosesor} alt="image" /></a>
                                    </li>
                                    <li>
                                    <a href="#"><img src={matlab} alt="image" /></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="margin_bottom_20" />
                            Copyright © 2022 <a href="#">RUSDAN SCHOOL</a>
                            <div className="cleaner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage