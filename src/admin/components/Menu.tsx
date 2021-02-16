import React from 'react'

const Menu = () => {
    return(
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita voluptates itaque eaque in deserunt, dolores quod ex esse alias, nostrum error quis omnis rem odio non. Quis sed natus aliquid.
                  </a>
                  <a className="nav-link" aria-current="page" href="#">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus itaque distinctio, ullam dignissimos quas quo sit placeat in ea pariatur facere, alias temporibus, iure amet! Dolorem fuga totam corporis.
                  </a>
                  <a className="nav-link" aria-current="page" href="#">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quasi ipsam asperiores est obcaecati quas quos optio eum. Tempora aperiam eum qui cumque perspiciatis voluptates corrupti fugit pariatur magni blanditiis.
                  </a>

                </li>
              </ul>
            </div>
          </nav>
    );
};

export default Menu;