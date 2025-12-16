# Lista Zadan - Projekt Zaliczeniowy

Prosta aplikacja typu CRUD (Create, Read, Update, Delete) służąca do zarządzania listą zadań. Projekt został wykonany w technologii TypeScript z wykorzystaniem frameworka Next.js oraz konteneryzacji Docker.

## Wykorzystane technologie

- **Frontend / Backend:** Next.js (App Router, Server Actions)
- **Język:** TypeScript
- **Baza danych:** PostgreSQL
- **ORM:** Prisma
- **Infrastruktura:** Docker & Docker Compose

## Wymagania

Do poprawnego działania projektu wymagany jest zainstalowany i uruchomiony program Docker Desktop.

## Instrukcja uruchomienia

1. Otwórz terminal (wiersz poleceń) w głównym katalogu projektu.

2. Przejdź to folderu todolist
    cd todolist

3. Zbuduj i uruchom kontenery za pomocą polecenia:
   docker compose up --build

4. Uruchom przeglądarkę i wejdź na adres:
    http://localhost:3000
