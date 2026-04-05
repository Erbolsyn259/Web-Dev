# Lab 9 — Django REST Framework: Online Shop API

Lab 8 жобасының жалғасы. Бұл лабораторияда **Django REST Framework (DRF)** арқылы толық REST API жасалды.

---

## Технологиялар

- Python 3.x
- Django 4.x
- Django REST Framework 3.x
- SQLite3

---

## Жоба құрылымы

```
lab9/
└── shop_back/
    ├── api/
    │   ├── management/
    │   │   └── commands/
    │   │       └── seed_data.py       # 4 категория + 20 өнім қосу
    │   ├── migrations/
    │   ├── admin.py                   # Category, Product тіркелген
    │   ├── apps.py
    │   ├── models.py                  # Category, Product модельдері
    │   ├── serializers.py             # CategorySerializer, ProductSerializer
    │   ├── urls.py                    # DefaultRouter
    │   └── views.py                   # CategoryViewSet, ProductViewSet
    ├── shop_back/
    │   ├── settings.py                # rest_framework қосылған
    │   ├── urls.py                    # /api/ маршруты
    │   └── wsgi.py
    ├── manage.py
    ├── requirements.txt
    └── OnlineShopAPI.postman_collection.json
```

---

## Орнату және іске қосу

### 1. Репозиторийді клондау
```bash
git clone https://github.com/azamat973/Web-Dev.git
cd Web-Dev/lab9/shop_back
```

### 2. Виртуалды орта жасау
```bash
python -m venv venv

# Windows
venv\Scripts\activate

# Mac/Linux
source venv/bin/activate
```

### 3. Тәуелділіктерді орнату
```bash
pip install -r requirements.txt
```

### 4. Миграцияларды қолдану
```bash
python manage.py makemigrations
python manage.py migrate
```

### 5. Суперпайдаланушы жасау
```bash
python manage.py createsuperuser
```

### 6. Серверді іске қосу
```bash
python manage.py runserver
```

---

## API Endpoints

Base URL: `http://127.0.0.1:8000`

### Categories
| Method | URL | Сипаттама |
|--------|-----|-----------|
| GET | `/api/categories/` | Барлық категориялар |
| GET | `/api/categories/{id}/` | ID бойынша категория |
| GET | `/api/categories/{id}/products/` | Категория өнімдері |
| POST | `/api/categories/` | Категория жасау |
| PUT | `/api/categories/{id}/` | Категория жаңарту |
| DELETE | `/api/categories/{id}/` | Категория жою |

### Products
| Method | URL | Сипаттама |
|--------|-----|-----------|
| GET | `/api/products/` | Барлық өнімдер |
| GET | `/api/products/{id}/` | ID бойынша өнім |
| POST | `/api/products/` | Өнім жасау |
| PUT | `/api/products/{id}/` | Өнім жаңарту |
| DELETE | `/api/products/{id}/` | Өнім жою |

---

## POST/PUT үшін JSON мысалдары

### Категория жасау
```json
{
  "name": "Смартфондар"
}
```

### Өнім жасау
```json
{
  "name": "iPhone 15 Pro",
  "description": "Apple флагман смартфоны",
  "price": 750000.0,
  "count": 10,
  "is_active": true,
  "category": 1
}
```

---

## Деректер

Админ панелі арқылы қосылған:

**4 категория:**
- Электроника
- Смартфондар
- Наушниктер
- Ноутбуктер

**20 өнім** — әр категорияға 5-тен

---

## Admin панелі

`http://127.0.0.1:8000/admin/` — суперпайдаланушы логин/паролімен кіресің

---

## Postman

`OnlineShopAPI.postman_collection.json` файлын Postman-ға import жасап, 11 дайын request-ті қолдана аласың:
- **6 request** — Categories
- **5 request** — Products

---

## Тексеру URL-дары

| URL | Не көрінеді |
|-----|-------------|
| `http://127.0.0.1:8000/api/` | API root |
| `http://127.0.0.1:8000/api/categories/` | Категориялар тізімі |
| `http://127.0.0.1:8000/api/products/` | Өнімдер тізімі |
| `http://127.0.0.1:8000/admin/` | Админ панелі |

---

## Орындалған тапсырмалар

- [x] `djangorestframework` орнатылды және конфигурацияланды
- [x] `CategorySerializer`, `ProductSerializer` жасалды
- [x] `CategoryViewSet`, `ProductViewSet` жасалды
- [x] `DefaultRouter` арқылы маршруттар тіркелді
- [x] Кастомды action: `GET /api/categories/{id}/products/`
- [x] `Category`, `Product` admin.py-да тіркелді
- [x] 4 категория + 20 өнім қосылды
- [x] Postman коллекция — 11 request
- [x] `OnlineShopAPI.postman_collection.json` қосылды
