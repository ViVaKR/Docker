

CREATE DATABASE mysuperdb;


REVOKE ALL ON DATABASE mysuperdb FROM PUBLIC;

REVOKE CREATE ON SCHEMA public FROM PUBLIC;

CREATE ROLE ddl_custom_role WITH ENCRYPTED PASSWORD 'PWDPWD';

GRANT
    CONNECT
    ON DATABASE mysuperdb TO ddl_custom_role;

GRANT
    TEMPORARY
    ON DATABASE mysuperdb TO ddl_custom_role;

CREATE ROLE dml_custom_role WITH ENCRYPTED PASSWORD 'PWDPWD';

GRANT
    CONNECT
    ON DATABASE mysuperdb TO dml_custom_role;

GRANT
    TEMPORARY
    ON DATABASE mysuperdb TO dml_custom_role;
