import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import st from './header.module.scss'

const Header = ({ siteTitle }) => (
  <header className={st.header}>
    <div className={st.header__wrapper}>
      <h1 className={st.header__title}>
        <Link to="/" className={st.header__link}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
