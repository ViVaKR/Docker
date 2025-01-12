# PostgreSQL

```bash
$ psql -h 192.168.0.8 -p 59293 -U postgres -d postgres
$ psql -h 192.168.0.8 -p 59293 -U vivabm -d vivabm
$ psql -h 192.168.0.8 -p 59293 -U vivakr -d vivakr
$ psql -h 192.168.0.8 -p 59293 -U buddha -d buddha
$ psql -h 192.168.0.8 -p 59293 -U text -d text
$ psql -h 192.168.0.222 -p 59874 -U postgres -d postgres

$ psql -U postgres
$ psql -h 192.168.0.8
$ psql -h 192.168.0.8 -U postgres
$ psql -h 192.168.0.8 -U vivabm -d vivabm
$ psql -h 192.168.0.8 -p 9000 -U vivabm -d vivabm
$ psql -h localhost -U browndwarf -p 5432 -d galaxy
$ psql -d dabase -U user -W
$ psql -h -d database -U user -W
$ psql -h 192.168.0.8 -p 59293 -d postgres -U postgres -W


# using pgcli
brew install pgcli

pgcli --help

# Usage: pgcli [OPTIONS] [DBNAME] [USERNAME]
# Options:
#   -h, --host TEXT          Host address of the postgres database.
#   -p, --port INTEGER       Port number at which the postgres instance is
#                            listening.
#   -U, --username TEXT      Username to connect to the postgres database.
#   -u, --user TEXT          Username to connect to the postgres database.
#   -W, --password           Force password prompt.
#   -w, --no-password        Never prompt for password.
#   --single-connection      Do not use a separate connection for completions.
#   -v, --version            Version of pgcli.
#   -d, --dbname TEXT        database name to connect to.
#   --pgclirc FILE           Location of pgclirc file.
#   -D, --dsn TEXT           Use DSN configured into the [alias_dsn] section of
#                            pgclirc file.
#   --list-dsn               list of DSN configured into the [alias_dsn] section
#                            of pgclirc file.
#   --row-limit INTEGER      Set threshold for row limit prompt. Use 0 to
#                            disable prompt.
#   --application-name TEXT  Application name for the connection.
#   --less-chatty            Skip intro on startup and goodbye on exit.
#   --prompt TEXT            Prompt format (Default: "\u@\h:\d> ").
#   --prompt-dsn TEXT        Prompt format for connections using DSN aliases
#                            (Default: "\u@\h:\d> ").
#   -l, --list               list available databases, then exit.
#   --auto-vertical-output   Automatically switch to vertical output mode if the
#                            result is wider than the terminal width.
#   --warn TEXT              Warn before running a destructive query.
#   --ssh-tunnel TEXT        Open an SSH tunnel to the given address and connect
#                            to the database from it.
#   --log-file TEXT          Write all queries & output into a file, in addition
#                            to the normal output destination.
#   --help                   Show this message and exit.

$ docker exec -it viv-postgres /bin/bash
```

<pre>
+--------------------------------------+------------------------------------------------+
| Command                              | Description                                    |
|--------------------------------------+------------------------------------------------|
| \#                                   | Refresh auto-completions.                      |
| \?                                   | Show Commands.                                 |
| \T [format]                          | Change the table format used to output results |
| \c[onnect] database_name             | Change to a new database.                      |
| \conninfo                            | Get connection details                         |
| \copy [tablename] to/from [filename] | Copy data between a file and a table.          |
| \d[+] [pattern]                      | List or describe tables, views and sequences.  |
| \dD[+] [pattern]                     | List or describe domains.                      |
| \dT[S+] [pattern]                    | List data types                                |
| \db[+] [pattern]                     | List tablespaces.                              |
| \df[+] [pattern]                     | List functions.                                |
| \di[+] [pattern]                     | List indexes.                                  |
| \dm[+] [pattern]                     | List materialized views.                       |
| \dn[+] [pattern]                     | List schemas.                                  |
| \ds[+] [pattern]                     | List sequences.                                |
| \dt[+] [pattern]                     | List tables.                                   |
| \du[+] [pattern]                     | List roles.                                    |
| \dv[+] [pattern]                     | List views.                                    |
| \dx[+] [pattern]                     | List extensions.                               |
| \e [file]                            | Edit the query with external editor.           |
| \h                                   | Show SQL syntax and help.                      |
| \i filename                          | Execute commands from file.                    |
| \l[+] [pattern]                      | List databases.                                |
| \n[+] [name] [param1 param2 ...]     | List or execute named queries.                 |
| \nd [name]                           | Delete a named query.                          |
| \ns name query                       | Save a named query.                            |
| \o [filename]                        | Send all query results to file.                |
| \pager [command]                     | Set PAGER. Print the query results via PAGER.  |
| \pset [key] [value]                  | A limited version of traditional \pset         |
| \q                                   | Quit pgcli.                                    |
| \refresh                             | Refresh auto-completions.                      |
| \sf[+] FUNCNAME                      | Show a function's definition.                  |
| \timing                              | Toggle timing of commands.                     |
| \x                                   | Toggle expanded output.                        |
| quit                                 | Quit pgcli.                                    |
+--------------------------------------+------------------------------------------------+
</pre>

```sql


# 언어 설정
locale-gen ko_KR.UTF-8
dpkg-reconfigure locales


-- 한글 데이터베이스 생성 시 설정 가능한 주요 옵션
-- 1. Encoding (문자 인코딩)
-- 2. LC_COLLATE (정렬기준) : ko_KR.UTF-8, 가 나 다 의 사전순 정렬
-- 3. LC_CTYPE (문자열 분류) ko_KR.UTF-8, 문자입력 및 대소문자 변환 등에 대한 로케일 설정
-- 4. Template (템플릿 데이터 베이스) : 새로운 데이터베이스의 초기 상태 정의 템플릿, template1 을 사용
-- 5. Tablespace (테이블스페이스) : 데이터베이스의 물리적 저장위치를 지정, 기본적으로 pg_default 를 사용

-- example table
CREATE DATABASE helloworld
WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'ko_KR.UTF-8'
    LC_CTYPE = 'ko_KR.UTF-8'
    TEMPLATE = template0;

---

-- 템플릿 만들기 (한글)
CREATE DATABASE template_kor
WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'ko_KR.UTF-8'
    LC_CTYPE = 'ko_KR.UTF-8'
    TEMPLATE = template0;

-- 템플릿으로 설정하기
UPDATE pg_database
SET datistemplate = TRUE
WHERE datname = 'template_kor';

-- 템플릿은 연결할 수 없도록 설정 함.
UPDATE pg_database
SET datallowconn = FALSE
WHERE datname = 'template_kor';

-- 템플릿 데이터베이스 여부 쿼리
select datname, datistemplate from pg_database;

-- 템플릿의 인코딩 확인
SELECT datname, datcollate, datctype
FROM pg_database
WHERE datname = 'template_bm';

-- 템플릿의 로케일 확인 (LC_COLLATE, LC_CTYPE)
SELECT datname, datcollate, datctype
FROM pg_database
WHERE datname = 'template_bm';

-- 템플릿을 바탕으로 데이터베이스 만들기
CREATE DATABASE korean_db
WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'ko_KR.UTF-8'
    LC_CTYPE = 'ko_KR.UTF-8'
    TEMPLATE = template_bm;

-- 샘플 테이블
CREATE TABLE demo_bigserial (
    id BIGSERIAL PRIMARY KEY, -- binint
    name VARCHAR(100) -- character varying
);

CREATE TABLE demo_serial (
    id SERIAL PRIMARY KEY, -- integer
    name VARCHAR(100) -- character varying
);


\c demo_bigserial
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'demo_bingserial';

-- 샘플
create database vivakr;
CREATE USER vivakr WITH PASSWORD '비밀번호';
grant all privileges on database vivakr to vivakr;
alter database vivakr owner to vivakr;

---

# 접속

## 비밀번호 자동 처리 로그인
~/.pgpass
# hostname:port:database:username:password
chmod 600 ~/.pgpass
$ psql -h hostname -p port -d database -U username

---



## TableSpace, 테이블 공간
-- /var/lib/postgresql/data
$ create tablespace bm location '/var/lib/postgresql/data';
$ \c dbaname username : connect to new database
$ select datname from pg_database;


\l, \l+, \list : 모든 데이터베이스 목록 보기
\d [table_name]  : 테이블 정보 보기
\dt : 모든 테이블 목록 보기
\du : 사용자 목록 보기
\c, select current_databae() : 현재 연결된 데이터베이스 확인
\c [dbname] : 데이터베이스 접속
\g : 직전 명령 실행
\s : history
\i filename
\dn : 스키마 목록 보기

\?
\q : quite
\password [username]
\H : toggle HTML

\timing

$ select version();

# docker oracle 23 ai free
$ cat /etc/redhat-release -> Red Hat Enterprise Linux release 8.10 (Ootpa)
$ uname -a
-> Linux 12ddbda6bada 6.10.14-linuxkit #1 SMP Fri Nov 29 17:22:03 UTC 2024 aarch64 aarch64 aarch64 GNU/Linux

-> /opt/oracle
-> $ORACLE_HOME - `/opt/oracle/product/23ai/dbhomeFree`
$ cd $ORACLE_HOME

$ microdnf install -y vim-minimal
$ clear
$ microdnf install -y ncurses
$ dnf install -y ncurses
$ tput clear
$ printf "\033c"

-- dnf는 RPM 기반 배포판(RHEL, Fedora, Oracle Linux 등)의 기본 패키지 관리자입니다.

$ microdnf --version
$ microdnf install -y dnf
$ microdnf install -y vim-minimal
$ dnf install -y iputils
$ ping -c 4 google.com
$ dnf install -y net-tools

## 복원, Restore `dvdrental` sample database

$ pg_restore -h 192.168.0.222 -p 59874 -U postgres -d dvdrental ~/Downloads/dvdrental.tar
$ psql -h 192.168.0.222 -p 59874 -U postgres
$ \dt
```

```sql

-- 데이터베이스 생성 및 삭제
CREATE DATABASE dbname;

DROP DATABASE dbname;

-- 테이블 생성, 삭제 및 수정(컬럼추가)
CREATE TABLE tablename (
    column1 datatype,
    column2 datatype,
    ...
);
DROP TABLE tablename;
ALTER TABLE tablename ADD columnname datatype;

-- 새로운 사용자 생성, 삭제
CREATE USER username WITH PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE dbname TO username;
DROP USER username;

-- 스키마 생성, 삭제
CREATE SCHEMA schemaname;
DROP SCHEMA schemaname;

-- 트랜잭션 시작
BEGIN;

-- 커밋

COMMIT;

-- 롤백

ROLLBACK;

-- 인덱스 생성, 삭제

CREATE INDEX indexname ON tablename (columnname);
DROP INDEX indexname;


-- 실행중인 쿼리 확인

SELECT * FROM pg_stat_activity;


-- 테이블의 통계 정보 보기

\di

-- 쿼리 실행계획보기

EXPLAIN ANALYZE SELECT * FROM tablename;

-- 백업 : .sql

pg_dump -h 192.168.0.8 -p 59293 -U postgres -d vivabm > vivabm_backup.sql

-- 복원 1 : .sql
psql -h 192.168.0.222 -p 59874 -U vivabm -d vivabm < vivabm_backup.sql
psql -h 192.168.0.8 -p 59293 -U postgres -d vivabm < vivabm_backup.sql

# 접속후
\i /path/to/backupfile.sql

-- 복원 2 : .dat
# -C -> 복원중에 데이터베이스를 생성함
# -d -> 복원할 데이터베이스 서버의 연결을 지정
pg_restore -C -d postgres backupfiel.dat

-- 현재 연결된 사용자 확인
select current_user;

-- 서버 버전

select version();

--

SELECT
  column_name,
  data_type,
  character_maximum_length,
  is_nullable,
  column_default
FROM
  information_schema.columns
WHERE
  table_name = 'film';


# \list  : 전체 Database Instance 목록
# \c vivabm vivabm
# \dt, \dt+
# \df
# \du
# \g	직전명령 실행
# \s	이전 실행 내역
# \?, \h	도움말
# \q	종료
# \x	컬럼보기 토글
# \H	html - aligned 토글

select * from qna limit 1;

-- 비밀번호 변경

$ postgres=# \password postgres
$ Enter new password: <new-password>
or
$ alter user postgres password '<new-password>'

-- ## Uptime

SELECT pg_postmaster_start_time();
SELECT current_timestamp - pg_postmaster_start_time() uptime;
SELECT
  date_trunc(
    'second',
    current_timestamp - pg_postmaster_start_time()
  ) as uptime;

-- ## 버전

select setting from pg_settings where name = 'server_version';

docker inspect --format='{{range .Config.Env}}{{println .}}{{end}}' viv-postgres

-- 데이터베이스 및 사용자 생성 모델
create database vivakr;
CREATE USER vivakr WITH PASSWORD '비밀번호';
grant all privileges on database vivakr to vivakr;
alter database vivakr owner to vivakr;

-- ## 테이블스페이스

select *from pg_tablespace;
\db+
select* from pg_tablespace;
select spcname from pg_tablespace;
CREATE TABLESPACE fastspace LOCATION '/ssd1/postgresql/data';
CREATE TABLE foo(i int) TABLESPACE space1;
SET default_tablespace = space1;
CREATE TABLE foo(i int);


-- ## 함수 샘플

AVG() function
select round(avg(replacement_cost), 2) avg_cost from film;

select avg(amount)::numeric(10,2) from payment;
select avg(distinct amount)::numeric(10,2) from payment;
SELECT
	AVG(amount)::numeric(10,2),
	SUM(amount)::numeric(10,2)
FROM
	payment;

---

select count(*) from payment;
select count(distinct amount) from payment;
select customer_id, count(customer_id) from payment group by customer_id;

---

SELECT
  first_name || ' ' || last_name full_name,
  COUNT (customer_id)
FROM
  payment
INNER JOIN customer USING (customer_id)
GROUP BY
  customer_id;

---

SELECT
  first_name || ' ' || last_name full_name,
  COUNT (customer_id)
FROM
  payment
INNER JOIN customer USING (customer_id)
GROUP BY
  customer_id
HAVING
  COUNT (customer_id) > 40;

---

SELECT
  payment_id,
  customer_id,
  amount
FROM
  payment
WHERE
  amount = (
    SELECT
      MAX (amount)
    FROM
      payment
  );

---

SELECT
  customer_id,
  MAX (amount)
FROM
  payment
GROUP BY
  customer_id;

---

SELECT
  customer_id,
  MAX (amount)
FROM
  payment
GROUP BY
  customer_id
HAVING
  MAX(amount) > 8.99;

---

select bool_and(active) from projects;
select current_date;
CREATE TABLE delivery(
  delivery_id SERIAL PRIMARY KEY,
  product VARCHAR(255) NOT NULL,
  delivery_date DATE DEFAULT CURRENT_DATE
);

select current_time;
select current_time(2);

```

## Data Types, 데이터타입

1. 수치형 데이터 타입 (Numeric Types)
	•	smallint: 2바이트, -32,768 to 32,767 범위의 정수.
	•	integer: 4바이트, -2,147,483,648 to 2,147,483,647 범위의 정수.
	•	bigint: 8바이트, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 범위의 정수.
	•	serial: 자동 증가하는 정수 (4바이트 integer와 동일).
	•	bigserial: 자동 증가하는 정수 (8바이트 bigint와 동일).
	•	numeric / decimal: 고정 소수점 수, 사용자 정의 정밀도와 스케일.
	•	real: 4바이트, 부동 소수점 수.
	•	double precision: 8바이트, 부동 소수점 수.

2. 문자열 데이터 타입 (String Types)
	•	char(n): 고정 길이 문자열 (n 길이).
	•	varchar(n): 가변 길이 문자열 (최대 n 길이).
	•	text: 가변 길이 문자열 (길이 제한 없음).
	•	citext: 대소문자를 구분하지 않는 문자열.

3. 날짜 및 시간 데이터 타입 (Date/Time Types)
	•	date: 날짜 (YYYY-MM-DD 형식).
	•	time [without time zone]: 시간 (HH:MM:SS 형식).
	•	time with time zone: 시간대 정보를 포함한 시간.
	•	timestamp [without time zone]: 날짜 및 시간 (YYYY-MM-DD HH:MM:SS 형식).
	•	timestamp with time zone: 시간대 정보를 포함한 날짜 및 시간.
	•	interval: 날짜 및 시간 간의 차이.

4. 불리언 데이터 타입 (Boolean Types)
	•	boolean: true, false, 또는 null.

5. 바이너리 데이터 타입 (Binary Types)
	•	bytea: 이진 데이터 (예: 이미지 파일, 비디오 파일 등).

6. ENUM 타입 (Enumerated Types)
	•	enum: 사용자가 정의한 고정된 값의 집합을 가진 데이터 타입.

7. 배열 (Array Types)
	•	array: 동일 타입의 값들을 순차적으로 저장하는 배열.

8. JSON 데이터 타입
	•	json: JSON 형식의 데이터 (문자열로 저장).
	•	jsonb: JSON 형식의 데이터 (이진 형태로 저장, 더 효율적인 처리 가능).

9. UUID (Universally Unique Identifier)
	•	uuid: 고유한 식별자, 128비트.

10. IP 주소 및 네트워크 관련 데이터 타입
	•	inet: IP 주소 (IPv4 또는 IPv6).
	•	cidr: IP 주소 범위 (서브넷 마스크 포함).

11. 자유형 텍스트 및 기타 타입
	•	tsvector: 텍스트 검색을 위한 벡터.
	•	tsquery: 텍스트 검색 쿼리.
	•	uuid: 유니크한 식별자.
	•	point: 2D 공간 좌표.
	•	line: 수학적인 직선.
	•	lseg: 2D 공간 상의 선분.
	•	box: 2D 공간 상의 직사각형.

12. 참조 데이터 타입 (Foreign Data Types)
	•	refcursor: 서버 사이드에서 사용하는 커서.

---

PostgreSQL은 다양한 데이터 모델을 지원하는 **고급 관계형 데이터베이스 관리 시스템(RDBMS)**입니다. 하지만 여러 고급 데이터 타입과 기능들을 통해 수학적, 과학적 계산 및 공간 데이터 처리에 강력한 지원을 제공하는 특징이 있습니다.

PostgreSQL의 수학과 과학적 특화 기능:
	1.	수학적인 데이터 타입:
	•	PostgreSQL은 point, line, lseg, **box**와 같은 수학적인 개념을 데이터 타입으로 지원합니다. 이를 통해 2D 공간 좌표, 직선, 선분, 직사각형 등을 처리할 수 있어, 공간 데이터나 기하학적 연산에 유리합니다.
	2.	수학 함수와 연산:
	•	PostgreSQL은 다양한 내장 수학 함수를 제공하여, 복잡한 수학적 계산이나 분석을 처리할 수 있습니다. 예를 들어, 삼각 함수, 지수 함수, 로그 함수, 각종 수학적 연산들을 지원합니다.
	•	복소수 처리, 다항식 계산, 통계 함수 등도 사용할 수 있습니다.
	3.	과학적 계산 및 통계:
	•	PostgreSQL은 pg_stat_statements, pg_freespace와 같은 확장 기능을 통해 통계 및 분석을 위한 강력한 기능을 제공합니다.
	•	통계 분석을 위한 분산 함수, 회귀 분석 등도 지원하며, 대규모 데이터 처리에서 유용합니다.
	4.	확장 모듈:
	•	PostgreSQL은 매우 확장성이 뛰어나므로, PostGIS와 같은 공간 데이터와 관련된 모듈을 사용하여 지리적 데이터 및 공간 분석을 쉽게 처리할 수 있습니다.
	•	또한, MADlib와 같은 데이터 과학 관련 확장도 지원합니다. MADlib은 대규모 데이터셋에서 기계 학습과 통계적 분석을 수행할 수 있도록 해주는 확장 모듈입니다.
	5.	과학적 계산을 위한 확장:
	•	PostgreSQL에는 cube, **earthdistance**와 같은 확장 기능이 있어, 3D 벡터 공간이나 지리적 거리 계산을 다루는 데 유리합니다. 이러한 기능은 과학적 연구나 공간 데이터 분석에서 매우 유용합니다.

결론:
광범위한 데이터 처리를 지원하는 범용 RDBMS입니다. 그러나 수학적 계산, 과학적 데이터 분석, 공간 데이터 처리 등의 분야에서 강력한 기능을 제공하므로, 해당 분야에 적합한 도구로 활용할 수 있습니다. 확장성과 유연성 덕분에 다양한 고급 수학적, 과학적 작업을 처리할 수 있는 강력한 플랫폼입니다.

```sql
CREATE DATABASE my_korean_db
WITH
    OWNER = my_user
    ENCODING = 'UTF8'
    LC_COLLATE = 'ko_KR.UTF-8'
    LC_CTYPE = 'ko_KR.UTF-8'
    TEMPLATE = template1;
```
