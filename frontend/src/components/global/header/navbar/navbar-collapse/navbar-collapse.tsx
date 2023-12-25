import { classname } from "utils";
import { Link } from "components";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

type Route = {
  name: string;
  path: string;
};

const cn = classname("navbar");

export const NavbarCollapse = () => {
  const router = useLocation();
  const { pathname } = router;
  const { t } = useTranslation("global");

  const routes = useMemo(
    (): Route[] => [
      { name: t("header.navbar.main-label"), path: "/" },
      {
        name: t("header.navbar.catalog-label"),
        path: "/catalog",
      },
      {
        name: t("header.navbar.about-store-label"),
        path: "/about",
      },
      {
        name: t("header.navbar.contacts-label"),
        path: "/contacts",
      },
    ],
    [t]
  );

  return (
    <ul className={cn("nav", ["mr-auto"])}>
      {routes.map(({ name, path }) => (
        <li
          key={name}
          className={`nav-item ${pathname === path ? "active" : ""}`}
        >
          <Link to={path}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarCollapse;
