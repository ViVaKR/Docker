REVOKE CREATE ON SCHEMA public FROM PUBLIC;
CREATE SCHEMA IF NOT EXISTS mysuperschema;
CREATE USER flywayuser WITH ENCRYPTED PASSWORD 'PWDPWD';
CREATE USER appuser WITH ENCRYPTED PASSWORD 'PWDPWD';
GRANT
    USAGE,
    CREATE
    ON SCHEMA mysuperschema TO ddl_custom_role;
GRANT
    USAGE
    ON SCHEMA mysuperschema TO dml_custom_role;
GRANT
    ALL
    ON ALL SEQUENCES mysuperschema TO ddl_custom_role;
GRANT
    USAGE,
    SELECT
    ON ALL SEQUENCES mysuperschema TO dml_custom_role;
GRANT ddl_custom_role TO flywayuser;
GRANT dml_custom_role TO appuser;
