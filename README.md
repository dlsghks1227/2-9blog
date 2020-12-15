# WAP 2020-2-9팀 프로젝트

블로그 제작


## Requirements

> - BACKEND
>   - [Python 3.7.9](https://www.python.org/downloads/release/python-379/)
>   - Django 3.1.4
>   - django-rest-auth 0.9.5
>   - djangorestframework 3.12.2
>   - djangorestframework-jwt 1.11.0

## Backend 환경 구성하기

> - Server 디렉터리 이동
> ```bash
> $ cd server
> ```
> 
> - 파이썬 가상환경 생성 및 활성화
> ```bash
> $ python -m venv .venv
> $ .venv\Scripts\activate.bat
> ```
>
> - 라이브러리 설치
> ```bash
> $ pip install -r requirements.txt
> ```
> 
> - DB 생성 및 테이블 생성
> ```
> $ python manage.py makemigrations
> $ python manage.py migrate
> ```
> 
> - 서버 실행
> ```bash
> $ python manage.py runserver
> ```