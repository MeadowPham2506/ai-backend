# AI Backend 🚀# AI Backend 🚀



[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7%2B-blue.svg)](https://www.typescriptlang.org/)[![TypeScript](https://img.shields.io/badge/TypeScript-5.7%2B-blue.svg)](https://www.typescriptlang.org/)

[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue.svg)](https://www.postgresql.org/)[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue.svg)](https://www.postgresql.org/)



## 📋 Tổng quan dự án## 📋 Tổng quan dự án



**AI Backend** là một ứng dụng backend hiện đại được xây dựng với **Node.js**, **TypeScript**, **Express.js** và **Prisma ORM**. Dự án được thiết kế theo kiến trúc **MVC** với cấu trúc thư mục được tổ chức rõ ràng và sử dụng **PostgreSQL** làm cơ sở dữ liệu chính.**AI Backend** là một ứng dụng backend hiện đại được xây dựng với **Node.js**, **TypeScript**, **Express.js** và **Prisma ORM**. Dự án được thiết kế theo kiến trúc **MVC** với cấu trúc thư mục được tổ chức rõ ràng và sử dụng **PostgreSQL** làm cơ sở dữ liệu chính.



### ✨ Tính năng chính### ✨ Tính năng chính



- 🔐 **Authentication & Authorization** với JWT- 🔐 **Authentication & Authorization** với JWT

- 📊 **RESTful API** với cấu trúc rõ ràng- 📊 **RESTful API** với cấu trúc rõ ràng

- 🛡️ **Security** tích hợp (Helmet, CORS, Rate Limiting)- 🛡️ **Security** tích hợp (Helmet, CORS, Rate Limiting)

- 📝 **Database Management** với Prisma ORM- 📝 **Database Management** với Prisma ORM

- 🐳 **Docker** support cho PostgreSQL- � **Docker** support cho PostgreSQL

- 🚦 **Process Management** với PM2- 🚦 **Process Management** với PM2

- 📈 **Logging** và monitoring- 📈 **Logging** và monitoring

- 🔄 **Hot reload** trong development- 🔄 **Hot reload** trong development



## 🛠️ Công nghệ sử dụng## 🛠️ Công nghệ sử dụng



### Backend Framework & Runtime### Backend Framework & Runtime

- **Node.js**: Runtime environment cho JavaScript- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white) **Node.js**: Runtime environment cho JavaScript

- **TypeScript**: Superset của JavaScript với type safety- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) **TypeScript**: Superset của JavaScript với type safety

- **Express.js**: Web framework cho Node.js- ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat&logo=express&logoColor=white) **Express.js**: Web framework cho Node.js

- **ts-node**: TypeScript execution engine cho Node.js- **ts-node**: TypeScript execution engine cho Node.js



### Cơ sở dữ liệu & ORM### Cơ sở dữ liệu & ORM

- **PostgreSQL**: Hệ quản trị cơ sở dữ liệu quan hệ- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white) **PostgreSQL**: Hệ quản trị cơ sở dữ liệu quan hệ

- **Prisma**: Modern ORM cho TypeScript và Node.js- **Prisma**: Modern ORM cho TypeScript và Node.js

- **Docker**: Container hóa PostgreSQL database- ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white) **Docker**: Container hóa PostgreSQL database



### Security & Middleware### Security & Middleware

- **Helmet**: Bảo mật HTTP headers- **Helmet**: Bảo mật HTTP headers

- **CORS**: Cross-Origin Resource Sharing- **CORS**: Cross-Origin Resource Sharing

- **Express Rate Limit**: Rate limiting middleware- **Express Rate Limit**: Rate limiting middleware

- **Morgan**: HTTP request logger- **Morgan**: HTTP request logger

- **Compression**: Gzip compression middleware- **Compression**: Gzip compression middleware

- **JSON Web Token**: Authentication tokens- **JSON Web Token**: Authentication tokens



### Development Tools### Development Tools

- **ESLint**: Code linting và style checking- **ESLint**: Code linting và style checking

- **Prettier**: Code formatting- **Prettier**: Code formatting

- **Nodemon**: Auto-restart trong development- **Nodemon**: Auto-restart trong development

- **PM2**: Process manager cho production- **PM2**: Process manager cho production



### Utilities### Utilities

- **Lodash**: JavaScript utility library- **Lodash**: JavaScript utility library

- **Axios**: HTTP client- **Axios**: HTTP client

- **dotenv**: Environment variables management- **dotenv**: Environment variables management

- **Signale**: Elegant console logger- **Signale**: Elegant console logger



## 📁 Cấu trúc dự án## 📁 Cấu trúc dự án



``````

ai-backend/ai-backend/

├── app/                              # Thư mục chính của ứng dụng├── app/                              # Thư mục chính của ứng dụng

│   ├── src/                          # Source code│   ├── src/                          # Source code

│   │   ├── main.ts                   # Entry point của ứng dụng│   │   ├── main.ts                   # Entry point của ứng dụng

│   │   ├── app.ts                    # Express app configuration│   │   ├── app.ts                    # Express app configuration

│   │   ├── configs/                  # Cấu hình ứng dụng│   │   ├── configs/                  # Cấu hình ứng dụng

│   │   ├── constants/                # Hằng số và constants│   │   │   └── server.config.ts      # Cấu hình server

│   │   ├── controllers/              # Controller layer (MVC)│   │   ├── constants/                # Hằng số và constants

│   │   ├── core/                     # Core utilities│   │   │   └── response.constant.ts  # Response constants

│   │   ├── middlewares/              # Express middlewares│   │   ├── controllers/              # Controller layer (MVC)

│   │   ├── repositories/             # Data access layer│   │   │   ├── order.controller.ts   # Order business logic

│   │   ├── routes/                   # API routes│   │   │   ├── product.controller.ts # Product business logic

│   │   │   ├── v1/                   # API version 1│   │   │   └── user.controller.ts    # User business logic

│   │   │   └── v2/                   # API version 2│   │   ├── core/                     # Core utilities

│   │   ├── services/                 # Business logic layer│   │   │   ├── database.core.ts      # Database connection

│   │   ├── types/                    # TypeScript type definitions│   │   │   ├── logger.core.ts        # Logging utility

│   │   ├── utils/                    # Utility functions│   │   │   └── response.core.ts      # Response helper

│   │   ├── sample/                   # Sample data và seeding│   │   ├── middlewares/              # Express middlewares

│   │   ├── public/                   # Static assets│   │   │   ├── auth.middleware.ts    # Authentication middleware

│   │   └── logs/                     # Application logs│   │   │   ├── error.middleware.ts   # Error handling

│   ├── prisma/                       # Prisma ORM configuration│   │   │   └── limiter.middleware.ts # Rate limiting

│   │   ├── schema.prisma             # Database schema│   │   ├── repositories/             # Data access layer

│   │   └── migrations/               # Database migrations│   │   │   ├── order.repository.ts   # Order data operations

│   ├── package.json                  # Dependencies và scripts│   │   │   ├── product.repository.ts # Product data operations

│   ├── tsconfig.json                 # TypeScript configuration│   │   │   └── user.repository.ts    # User data operations

│   ├── eslint.config.js              # ESLint configuration│   │   ├── routes/                   # API routes

│   ├── nodemon.json                  # Nodemon configuration│   │   │   ├── index.ts              # Main router

│   └── ecosystem.config.js           # PM2 configuration│   │   │   ├── v1/                   # API version 1

├── postgres/                         # PostgreSQL Docker setup│   │   │   │   ├── index.ts          # V1 router

│   ├── docker-compose.yml            # Docker Compose config│   │   │   │   ├── order.route.ts    # Order endpoints

│   └── postgresql.conf               # PostgreSQL configuration│   │   │   │   ├── product.route.ts  # Product endpoints

└── docs/                            # API Documentation│   │   │   │   └── user.route.ts     # User endpoints

    ├── openapi.json                 # OpenAPI specification (JSON)│   │   │   └── v2/                   # API version 2

    ├── openapi.yaml                 # OpenAPI specification (YAML)│   │   │       └── index.ts          # V2 router

    └── postman.json                 # Postman collection│   │   ├── services/                 # Business logic layer

```│   │   │   ├── order.service.ts      # Order business logic

│   │   │   ├── product.service.ts    # Product business logic

## 🗄️ Database Schema│   │   │   └── user.service.ts       # User business logic

│   │   ├── types/                    # TypeScript type definitions

Dự án sử dụng **PostgreSQL** với **3 bảng chính**:│   │   │   ├── common/               # Common types

│   │   │   │   ├── config.types.ts   # Configuration types

### 👤 Users│   │   │   │   ├── document.types.ts # Document types

- `id`: Primary key (auto increment)│   │   │   │   └── response.types.ts # Response types

- `name`: Tên người dùng│   │   │   └── dtos/                 # Data Transfer Objects

- `created_at`, `updated_at`: Timestamps│   │   │       ├── index.ts          # DTO exports

│   │   │       ├── order.dto.ts      # Order DTOs

### 📦 Products│   │   │       ├── product.dto.ts    # Product DTOs

- `id`: Primary key (auto increment)│   │   │       └── user.dto.ts       # User DTOs

- `name`: Tên sản phẩm│   │   ├── utils/                    # Utility functions

- `unit`: Đơn vị tính│   │   │   └── async-wrapper.util.ts # Async error wrapper

- `origin`: Xuất xứ│   │   ├── sample/                   # Sample data

- `note`: Ghi chú (optional)│   │   │   └── seed.ts               # Database seeding

- `is_active`: Trạng thái hoạt động│   │   ├── public/                   # Static assets

- `created_at`, `updated_at`: Timestamps│   │   │   └── favicon.png           # Application favicon

│   │   └── logs/                     # Application logs

### 📋 Orders│   │       └── app.log               # Main log file

- `id`: Primary key (auto increment)│   ├── prisma/                       # Prisma ORM configuration

- `user_id`: Foreign key → Users│   │   ├── schema.prisma             # Database schema

- `product_id`: Foreign key → Products│   │   └── migrations/               # Database migrations

- `quantity`: Số lượng│   │       ├── migration_lock.toml   # Migration lock

- `purpose`: Mục đích sử dụng (optional)│   │       └── 20251003075216_init/  # Initial migration

- `created_at`, `updated_at`: Timestamps│   │           └── migration.sql     # SQL migration file

│   ├── package.json                  # Dependencies và scripts

## 🚀 Cài đặt và chạy dự án│   ├── tsconfig.json                 # TypeScript configuration

│   ├── eslint.config.js              # ESLint configuration

### Yêu cầu hệ thống│   ├── nodemon.json                  # Nodemon configuration

- **Node.js** >= 18.0.0│   └── ecosystem.config.js           # PM2 configuration

- **npm** hoặc **yarn**├── postgres/                         # PostgreSQL Docker setup

- **PostgreSQL** >= 16│   ├── docker-compose.yml            # Docker Compose config

- **Docker** & **Docker Compose** (optional)│   └── postgresql.conf               # PostgreSQL configuration

└── docs/                            # API Documentation

### 1. Clone repository    ├── openapi.json                 # OpenAPI specification (JSON)

```bash    ├── openapi.yaml                 # OpenAPI specification (YAML)

git clone https://github.com/MeadowPham2506/ai-backend.git    └── postman.json                 # Postman collection

cd ai-backend```

```

## 🗄️ Database Schema

### 2. Cài đặt dependencies

```bashDự án sử dụng **PostgreSQL** với **3 bảng chính**:

cd app

npm install### 👤 Users

```- `id`: Primary key (auto increment)

- `name`: Tên người dùng

### 3. Thiết lập cơ sở dữ liệu- `created_at`, `updated_at`: Timestamps



#### Option A: Sử dụng Docker (Khuyến nghị)### 📦 Products

```bash- `id`: Primary key (auto increment)

cd ../postgres- `name`: Tên sản phẩm

docker-compose up -d- `unit`: Đơn vị tính

```- `origin`: Xuất xứ

- `note`: Ghi chú (optional)

#### Option B: PostgreSQL local- `is_active`: Trạng thái hoạt động

Tạo database local và cập nhật connection string trong `.env`- `created_at`, `updated_at`: Timestamps



### 4. Cấu hình môi trường### 📋 Orders

Tạo file `.env` trong thư mục `app/`:- `id`: Primary key (auto increment)

```env- `user_id`: Foreign key → Users

# Database- `product_id`: Foreign key → Products

PRISMA_DATABASE_URL="postgresql://postgres:postgres123@localhost:5432/production_db"- `quantity`: Số lượng

- `purpose`: Mục đích sử dụng (optional)

# Server- `created_at`, `updated_at`: Timestamps

PORT=3000

NODE_ENV=development## 🚀 Cài đặt và chạy dự án



# JWT (nếu sử dụng authentication)### Yêu cầu hệ thống

JWT_SECRET=your-secret-key- **Node.js** >= 18.0.0

```- **npm** hoặc **yarn**

- **PostgreSQL** >= 16

### 5. Chạy migration- **Docker** & **Docker Compose** (optional)

```bash

cd app### 1. Clone repository

npx prisma migrate dev```bash

npx prisma generategit clone https://github.com/MeadowPham2506/ai-backend.git

```cd ai-backend

```

### 6. Seed dữ liệu mẫu (optional)

```bash### 2. Cài đặt dependencies

npm run seed```bash

```cd app

npm install

### 7. Khởi động server# hoặc

yarn install

#### Development mode```

```bash

npm run dev### 3. Thiết lập cơ sở dữ liệu

```

#### Option A: Sử dụng Docker (Khuyến nghị)

#### Production mode```bash

```bashcd ../postgres

npm run builddocker-compose up -d

npm start```

```

#### Option B: PostgreSQL local

#### Sử dụng PM2Tạo database local và cập nhật connection string trong `.env`

```bash

npm install -g pm2### 4. Cấu hình môi trường

pm2 start ecosystem.config.jsTạo file `.env` trong thư mục `app/`:

``````env

# Database

Server sẽ chạy tại: `http://localhost:3000`PRISMA_DATABASE_URL="postgresql://postgres:postgres123@localhost:5432/production_db"



## 📚 API Documentation# Server

PORT=3000

### Base URLNODE_ENV=development

```

http://localhost:3000/api/v1# JWT (nếu sử dụng authentication)

```JWT_SECRET=your-secret-key

```

### Endpoints chính

### 5. Chạy migration

#### 👤 Users```bash

- `GET /api/v1/users` - Lấy danh sách userscd app

- `POST /api/v1/users` - Tạo user mớinpx prisma migrate dev

- `GET /api/v1/users/:id` - Lấy thông tin user```

- `PUT /api/v1/users/:id` - Cập nhật user

- `DELETE /api/v1/users/:id` - Xóa user### 6. Seed dữ liệu mẫu (optional)

```bash

#### 📦 Productsnpm run seed

- `GET /api/v1/products` - Lấy danh sách sản phẩm```

- `POST /api/v1/products` - Tạo sản phẩm mới

- `GET /api/v1/products/:id` - Lấy thông tin sản phẩm### 7. Khởi động server

- `PUT /api/v1/products/:id` - Cập nhật sản phẩm

- `DELETE /api/v1/products/:id` - Xóa sản phẩm#### Development mode

```bash

#### 📋 Ordersnpm run dev

- `GET /api/v1/orders` - Lấy danh sách đơn hàng```

- `POST /api/v1/orders` - Tạo đơn hàng mới

- `GET /api/v1/orders/:id` - Lấy thông tin đơn hàng#### Production mode

- `PUT /api/v1/orders/:id` - Cập nhật đơn hàng```bash

- `DELETE /api/v1/orders/:id` - Xóa đơn hàngnpm run build

npm start

## 🧪 Scripts NPM```



```bash#### Sử dụng PM2

# Development```bash

npm run dev          # Chạy server với hot reloadnpm install -g pm2

npm run build        # Build TypeScript to JavaScriptpm2 start ecosystem.config.js

npm start            # Chạy production server```



# Code QualityServer sẽ chạy tại: `http://localhost:3000`

npm run lint         # Chạy ESLint

npm run format       # Format code với Prettier## 📚 API Documentation



# Database### Base URL

npm run seed         # Seed dữ liệu mẫu```

npx prisma studio    # Mở Prisma Studiohttp://localhost:3000/api/v1

npx prisma generate  # Generate Prisma client```

```

### Endpoints chính

## 🛡️ Security Features

#### 👤 Users

- **Helmet**: Security headers protection- `GET /api/v1/users` - Lấy danh sách users

- **CORS**: Cross-origin resource sharing control- `POST /api/v1/users` - Tạo user mới

- **Rate Limiting**: API rate limiting middleware- `GET /api/v1/users/:id` - Lấy thông tin user

- **Input Validation**: Request validation với DTOs- `PUT /api/v1/users/:id` - Cập nhật user

- **JWT Authentication**: Token-based authentication- `DELETE /api/v1/users/:id` - Xóa user

- **Error Handling**: Centralized error management

#### 📦 Products

## 📊 Monitoring & Logging- `GET /api/v1/products` - Lấy danh sách sản phẩm

- `POST /api/v1/products` - Tạo sản phẩm mới

- **Morgan**: HTTP request logging- `GET /api/v1/products/:id` - Lấy thông tin sản phẩm

- **Signale**: Elegant console logging- `PUT /api/v1/products/:id` - Cập nhật sản phẩm

- **Log Files**: Automatic log rotation- `DELETE /api/v1/products/:id` - Xóa sản phẩm

- **Health Checks**: Database connection monitoring

#### 📋 Orders

## 🐳 Docker Support- `GET /api/v1/orders` - Lấy danh sách đơn hàng

- `POST /api/v1/orders` - Tạo đơn hàng mới

### PostgreSQL Container- `GET /api/v1/orders/:id` - Lấy thông tin đơn hàng

```bash- `PUT /api/v1/orders/:id` - Cập nhật đơn hàng

cd postgres- `DELETE /api/v1/orders/:id` - Xóa đơn hàng

docker-compose up -d

```### 📄 Tài liệu API chi tiết

- **OpenAPI Spec**: `/docs/openapi.yaml`

### Environment Variables- **Postman Collection**: `/docs/postman.json`

- `POSTGRES_USER`: Database user

- `POSTGRES_PASSWORD`: Database password## 🧪 Scripts NPM

- `POSTGRES_DB`: Database name

```bash

## 🤝 Contributing# Development

npm run dev          # Chạy server với hot reload

1. Fork repositorynpm run build        # Build TypeScript to JavaScript

2. Tạo feature branch (`git checkout -b feature/amazing-feature`)npm start            # Chạy production server

3. Commit changes (`git commit -m 'Add some amazing feature'`)

4. Push to branch (`git push origin feature/amazing-feature`)# Code Quality

5. Tạo Pull Requestnpm run lint         # Chạy ESLint

npm run format       # Format code với Prettier

## 📝 License

# Database

Distributed under the MIT License. See `LICENSE` for more information.npm run seed         # Seed dữ liệu mẫu

npx prisma studio    # Mở Prisma Studio

## 👨‍💻 Authornpx prisma generate  # Generate Prisma client

```

**ThanhPH** - [MeadowPham2506](https://github.com/MeadowPham2506)

## 🔧 Cấu hình

---

### TypeScript

⭐ Nếu dự án này hữu ích, hãy cho một star nhé!- `tsconfig.json`: TypeScript configuration
- Path aliases được thiết lập (`@src/*`)

### ESLint & Prettier
- `eslint.config.js`: ESLint rules
- Code formatting tự động với Prettier

### PM2 (Production)
- `ecosystem.config.js`: PM2 process configuration
- Memory limit: 4GB
- Auto restart: enabled

## 🛡️ Security Features

- **Helmet**: Security headers protection
- **CORS**: Cross-origin resource sharing control
- **Rate Limiting**: API rate limiting middleware
- **Input Validation**: Request validation với DTOs
- **JWT Authentication**: Token-based authentication
- **Error Handling**: Centralized error management

## 📊 Monitoring & Logging

- **Morgan**: HTTP request logging
- **Signale**: Elegant console logging
- **Log Files**: Automatic log rotation
- **Health Checks**: Database connection monitoring

## 🐳 Docker Support

### PostgreSQL Container
```bash
cd postgres
docker-compose up -d
```

### Environment Variables
- `POSTGRES_USER`: Database user
- `POSTGRES_PASSWORD`: Database password
- `POSTGRES_DB`: Database name

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add some amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Author

**ThanhPH** - [MeadowPham2506](https://github.com/MeadowPham2506)

## 📞 Liên hệ

- GitHub: [@MeadowPham2506](https://github.com/MeadowPham2506)
- Email: thanhph2k3@example.com

---

⭐ Nếu dự án này hữu ích, hãy cho một star nhé!
│   │   │   └── response.constant.ts # HTTP response constants
│   │   ├── controllers/         # Request handlers
│   │   │   ├── category.controller.ts
│   │   │   ├── product.controller.ts
│   │   │   └── user.controller.ts
│   │   ├── core/                # Core modules
│   │   │   ├── database.core.ts # Database connection
│   │   │   ├── logger.core.ts   # Logging configuration
│   │   │   └── response.core.ts # API response classes
│   │   ├── middlewares/         # Express middlewares
│   │   │   ├── error.middleware.ts   # Error handling
│   │   │   └── limiter.middleware.ts # Rate limiting
│   │   ├── repositories/        # Data access layer
│   │   │   ├── category.repository.ts
│   │   │   ├── product.repository.ts
│   │   │   └── user.repository.ts
│   │   ├── routes/              # API routes
│   │   │   ├── index.ts
│   │   │   ├── v1/             # API version 1
│   │   │   └── v2/             # API version 2
│   │   ├── services/            # Business logic layer
│   │   │   ├── category.service.ts
│   │   │   ├── product.service.ts
│   │   │   └── user.service.ts
│   │   ├── types/               # TypeScript type definitions
│   │   │   ├── config.d.ts
│   │   │   ├── document.d.ts
│   │   │   ├── global.d.ts
│   │   │   └── dtos/
│   │   ├── utils/               # Utility functions
│   │   ├── public/              # Static files
│   │   │   └── favicon.png
│   │   ├── generated/           # Prisma generated files
│   │   │   └── prisma/
│   │   └── logs/                # Application logs
│   ├── prisma/                  # Prisma schema
│   │   └── schema.prisma       # Database schema definition
│   ├── logs/                    # Log files
│   │   └── app.log
│   ├── package.json            # Dependencies và scripts
│   ├── tsconfig.json           # TypeScript configuration
│   ├── eslint.config.js        # ESLint configuration
│   ├── nodemon.json            # Nodemon configuration
│   └── ecosystem.config.js     # PM2 configuration
├── postgres/                    # PostgreSQL Docker setup
│   ├── docker-compose.yml      # Docker compose configuration
│   └── postgresql.conf         # PostgreSQL configuration
└── docs/                       # Documentation
```

## 🗄️ Database Schema

Dự án sử dụng PostgreSQL với Prisma ORM. Database schema bao gồm:

### Categories Table
```sql
- id: Int (Primary Key, Auto increment)
- name: String (Unique)
- parent_id: Int (Optional, Foreign Key to self)
- parent: Category relation (Self-reference)
- children: Category[] relation (One-to-many)
- products: Product[] relation (One-to-many)
```

### Products Table
```sql
- id: Int (Primary Key, Auto increment)
- category_id: Int (Foreign Key to categories)
- name: String
- unit: String (Optional)
- origin: String (Optional)
- is_active: Boolean (Default: true)
- category: Category relation (Many-to-one)
```

## 🛠️ Kiến trúc ứng dụng

### Layered Architecture
Dự án được thiết kế theo mô hình 4 lớp:

1. **Controller Layer**: Xử lý HTTP requests/responses
2. **Service Layer**: Business logic và validation
3. **Repository Layer**: Data access và database operations
4. **Core Layer**: Shared utilities và configurations

### Key Features

#### 🔐 Security Middleware
- **Helmet**: Thiết lập security headers
- **CORS**: Cấu hình cross-origin requests
- **Rate Limiting**: Giới hạn số requests từ client
- **Error Handling**: Centralized error handling

#### 📝 Logging System
- **Morgan**: HTTP request logging
- **Signale**: Structured application logging
- **File Logging**: Logs được lưu vào files

#### 🚦 API Response System
- **Standardized Responses**: Unified API response format
- **Error Handling**: Custom error classes
- **HTTP Status Codes**: Comprehensive status code constants

#### ⚙️ Configuration Management
- **Environment Variables**: `.env` file support
- **Type-safe Config**: TypeScript interfaces cho configuration
- **Server Configuration**: Centralized server settings

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server với hot reload

# Production
npm run build        # Build TypeScript to JavaScript
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code với Prettier

# Process Management (PM2)
pm2 start ecosystem.config.js    # Start với PM2
pm2 stop ai-backend             # Stop application
pm2 restart ai-backend          # Restart application
```

## 🚀 Cài đặt và chạy dự án

### Yêu cầu hệ thống
- **Node.js**: >= 16.x
- **npm/yarn**: Package manager
- **Docker**: Cho PostgreSQL (optional)
- **PostgreSQL**: >= 13.x (nếu không dùng Docker)

### 1. Clone repository
```bash
git clone <repository-url>
cd ai-backend
```

### 2. Cài đặt dependencies
```bash
cd app
npm install
# hoặc
yarn install
```

### 3. Thiết lập Database
#### Sử dụng Docker (Recommended)
```bash
cd postgres
docker-compose up -d
```

### 4. Cấu hình Environment Variables
Tạo file `.env` trong thư mục `app/`:
```env
NODE_ENV=development
SERVER_PORT=8080
PRISMA_DATABASE_URL="postgresql://postgres:postgres123@localhost:5432/production_db"
LIMITER_MAX_REQUESTS=100
LIMITER_WINDOW_MS=15
```

### 5. Chạy Prisma migrations
```bash
cd app
npx prisma generate
npx prisma db push
```

### 6. Khởi động ứng dụng

#### Development mode
```bash
npm run dev
```

#### Production mode
```bash
npm run build
npm run start
```

## 🔧 Configuration

### Server Configuration
File: `src/configs/server.config.ts`
- **Environment**: development/production
- **Port**: Server port (default: 8080)
- **Rate Limiting**: Request limits và time windows

### Database Configuration
File: `prisma/schema.prisma`
- **Provider**: PostgreSQL
- **Client Generation**: Custom output path
- **Database URL**: From environment variables

### TypeScript Configuration
File: `tsconfig.json`
- **Target**: ES2020
- **Module**: CommonJS
- **Path Mapping**: `@src/*` alias
- **Type Checking**: Strict mode

## 📊 Monitoring & Logging

### Application Logs
- **Location**: `app/logs/app.log`
- **Format**: Combined format với timestamps
- **Rotation**: Automatic log rotation

### Process Monitoring
- **PM2**: Production process management
- **Health Checks**: Database connection monitoring
- **Memory Limits**: 4GB max memory per process

## 🔄 Development Workflow

### Code Quality
1. **ESLint**: Automated linting
2. **Prettier**: Code formatting
3. **TypeScript**: Type checking
4. **Hot Reload**: Nodemon cho development

### Database Workflow
1. **Schema First**: Design trong `schema.prisma`
2. **Code Generation**: Prisma client auto-generation
3. **Migrations**: Database migrations
4. **Type Safety**: Generated types cho database operations

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch
3. Commit changes với clear messages
4. Run tests và linting
5. Submit pull request

## 📝 License

MIT License - Xem file LICENSE để biết thêm chi tiết.

## 👨‍💻 Author

**ThanhPH** - Initial work và maintenance

---

*Dự án này đang trong giai đoạn phát triển. Các controllers, services, và repositories hiện tại đang được xây dựng.*