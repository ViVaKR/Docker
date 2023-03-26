# Oracle Image PULL
1. $ docker pull gvenzl/oracle-xe
2. docker run -d -p 59573:1521 -e ORACLE_PASSWORD='비밀번호' --name viv-oracle -v /Users/vivabm/Database/Oracle-Data:/opt/oracle/oradata gvenzl/oracle-xe

# 접속
1. docker exec -it <container-id> bash  ' bash 로 접근
2. docker exec -it <container-id> sqlplus ' 직접 접근  
> Enter user-name: system  
> Enter password : 비밀번호
>> sql> select instance_name, version, status from v$instance; ' 인스턴스 확인  
>> sql> SELECT owner, table_name FROM dba_tables;  
>> sql> SELECT owner, table_name FROM all_tables;  
>> sql> select table_name from user_tables;  

# sys as sysdba 
> SQL> connect sys as sysdba;  
> Enter password:   
> Connected.  
> SQL> ...

# Developer Tools Connection Test
> 서비스 이름 찾기 : CLI 접속 후 'CDB'  
> sql> select value from v$parameter where name like '%service_name%';  
> result -> **XE**  
> SID : Instance 의 유니크한 이름  
> Service Name : 데이터베이스에 원격으로 접속 할 때 사용  
> CDB -> Root (CDB$ROOT)  
> Seed (PDB$Seed) : 원형  
---
> 가상 데이터베이스 확인
>> sql> select name from v$pdbs;  
>> Pluggable Database, 가상데이터베이스 -> 'XEPDB1'    
>>> Seed PDB Pluggable Database 생성 후 서버 접속 ##  
>>> -> ViV-XEPDB-1, 서비스이름 -> XEPDB1  
---
> 원격접속 설정  
>> 기본값 : localhost 접속만 하도록 되어있으므로  
>> 그것을 -> false 로 설정하여 원격접속을 허용 설정함  
>> sql> EXEC DBMS_XDB.SETLISTENERLOCALACCESS(FALSE)  
>> result -> PL/SQL procedure successfully completed.
---
> Admin Accounts  
>> + Sys : An account used to perform database administration tasks.  
>> + SYSDBA : 전체 자원을 관리할 수 있는 관리계정  
>> + System  
>>> A default generic database administrator account for Oracle databases.  
>>> For production systems, Oracle recommends creating individual database  
>>> administrator  account and not using the generic SYSTEM account  
>>> for database administration operations.  
---
> Default Sample Schema User Accounts  
>> BI (Business Intelligence)  
>> HR (Human REsources)  
>> OE (Order Entry)  
>> PM (Product Media)  
>> IX (Information Exchange)  
>> SH (Sales)  
