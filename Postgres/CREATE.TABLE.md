# Create Table

```sql
CREATE TABLE weather (
city varchar(80),
temp_lo int, -- low temperature
temp_hi int, -- high temperature
prcp real, -- precipitation, 강수량
date date
);

-- 데이터베이스의 COLLATE 는 자동 상속되나 아래와 같이 지정할 수 있다.
CREATE TABLE weather (
    city varchar(80) COLLATE "ko_KR.UTF-8",  -- 한글 정렬 규칙을 명시적으로 적용 (varchar, text 등에만 적용됨)
    temp_lo int,
    temp_hi int,
    prcp real,
    date date
);

CREATE TABLE cities (
name varchar(80),
location point
);

```
