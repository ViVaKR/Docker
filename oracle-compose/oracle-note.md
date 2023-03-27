
# Oracle Image PULL
```bash
    docker pull gvenzl/oracle-xe
    docker run -d -p 59573:1521 -e ORACLE_PASSWORD='비밀번호' --name viv-oracle -v /Users/vivabm/Database/Oracle-Data:/opt/oracle/oradata gvenzl/oracle-xe
```
# 접속
```bash
    docker exec -it <container-id> bash  ' bash 로 접근
    docker exec -it <container-id> sqlplus ' 직접 접근  
    docker exec -it viv-oracle bash -c "source /opt/oracle/.bash_profile; sqlplus /nolog" ' 주 접속 방식  
    connect sys as sysdba;
    # $ Enter password:
```

## 신규 사용자 생성  
```sql
    alter session set "_ORACLE_SCRIPT"=true; -- Session altered.  
    create user VIV identified by "비밀번호"; -- User created.  
    grant all privileges to viv;  -- Grant succeeded.
    
    -- 서비스 확인  
    select value from v$parameter where name like '%service_name%';  
    -- result -> XE
```

## PDB(가상데이터베이스) 확인
```sql
    select name from v$pdbs;
    select instance_name, version, status from v$instance; -- 인스턴스 확인  
    
    SELECT owner, table_name FROM dba_tables;  
    SELECT owner, table_name FROM all_tables;  
    select table_name from user_tables;  
```

### Developer Tools Connection Test
> 서비스 이름 찾기 : CLI 접속 후 'CDB'  
```
    select value from v$parameter where name like '%service_name%';  
    --result -> **XE**  
```
> SID : Instance 의 유니크한 이름, 보다 큰 작업 가능, SYSDBA, 완전한 Admin
> Service Name : 데이터베이스에 원격으로 접속 할 때 사용  
> CDB -> Root (CDB$ROOT)  
> Seed (PDB$Seed) : 원형, Create Pluggable Database 

```sql
CREATE
    PLUGGABLE DATABASE hrpdb
    ADMIN USER dba1
    IDENTIFIED BY password
```
---

> Pluggable Database, 가상데이터베이스 -> 'XEPDB1'    
>> Seed PDB Pluggable Database 생성 후 서버 접속 ##  
>> -> ViV-XEPDB-1, 서비스이름 -> XEPDB1  
---

## 원격접속 설정  
> 기본값 : localhost 접속만 하도록 되어있으므로  
> 그것을 -> false 로 설정하여 원격접속을 허용 설정함  
```sql
    EXEC DBMS_XDB.SETLISTENERLOCALACCESS(FALSE)  
    -- result -> PL/SQL procedure successfully completed.
```
---

## Admin Accounts  
> + Sys : An account used to perform database administration tasks.  
> + SYSDBA : 자원 관리계정  
> + System  
>> A default generic database administrator account for Oracle databases.  
>> For production systems, Oracle recommends creating individual database  
>> administrator  account and not using the generic SYSTEM account  
>> for database administration operations.  
---
> Default Sample Schema User Accounts  
>> BI (Business Intelligence)  
>> HR (Human REsources)  
>> OE (Order Entry)  
>> PM (Product Media)  
>> IX (Information Exchange)  
>> SH (Sales)  

---
### DBA 테이블스페이스 생성 : Developer Tool
> DBA    
> 저장영역 -> 테이블스페이스  
>> VIV_TABLESPACE, VIV_DATAFILE, 영구, 500 + 500 + 1G  
>> VIV_LOGSPACE, VIV_LOGFILE,  임시, 500 + 500 + 1G  

> 테이블스페이스에 대한 사용자 생성
>> 대문자로 생성
>> 테이블과 로그 스페이스를 할당함
