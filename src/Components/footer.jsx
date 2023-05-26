import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div class="footer-dark mt-5">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li>Amir Hasanov</li>
                            <li>Vagif Mammadov</li>
                            <li>Hosting</li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><Link to="/">Для Компаний</Link></li>
                            <li><Link to="/">Настройки</Link></li>
                            <li><Link to="/">Вакансии</Link></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Company Name</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div class="col item social">
                        <Link to="/for-companies"><i class="fa-brands fa-twitter"></i></Link>
                        <Link to="/"><i class="fa-brands fa-instagram"></i></Link>
                        <Link to="/"><i class="fa-brands fa-facebook"></i></Link>
                        <Link to="/"><i class="fa-brands fa-whatsapp"></i></Link>
                    </div>
                </div>
                <p class="copyright">Company Name © 2018</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer