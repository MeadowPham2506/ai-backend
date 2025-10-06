# AI Backend 🚀# AI Backend 🚀



[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7%2B-blue.svg)](https://www.typescriptlang.org/)[![TypeScript](https://img.shields.io/badge/TypeScript-5.7%2B-blue.svg)](https://www.typescriptlang.org/)

[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue.svg)](https://www.postgresql.org/)[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue.svg)](https://www.postgresql.org/)



## 📋 Tổng quan dự án## 📋 Tổng quan dự án



**AI Backend** là một ứng dụng backend hiện đại được xây dựng với **Node.js**, **TypeScript**, **Express.js** và **Prisma ORM**. Dự án được thiết kế theo kiến trúc **MVC** với cấu trúc thư mục được tổ chức rõ ràng và sử dụng **PostgreSQL** làm cơ sở dữ liệu chính.**AI Backend** là một ứng dụng backend hiện đại được xây dựng với **Node.js**, **TypeScript**, **Express.js** và **Prisma ORM**. Dự án được thiết kế theo kiến trúc **MVC** với cấu trúc thư mục được tổ chức rõ ràng và sử dụng **PostgreSQL** làm cơ sở dữ liệu chính.



### ✨ Tính năng chính

### ✨ Tính năng chính

- 🔐 **Authentication & Authorization** với JWT

- 📊 **RESTful API** với cấu trúc rõ ràng- 🔐 **Authentication & Authorization** với JWT

- 🛡️ **Security** tích hợp (Helmet, CORS, Rate Limiting)- 📊 **RESTful API** với cấu trúc rõ ràng

- 📝 **Database Management** với Prisma ORM- 🛡️ **Security** tích hợp (Helmet, CORS, Rate Limiting)

- 🐳 **Docker** support cho PostgreSQL- 📝 **Database Management** với Prisma ORM

- 🚦 **Process Management** với PM2- 🐳 **Docker** support cho PostgreSQL

- 📈 **Logging** và monitoring- 🚦 **Process Management** với PM2

- 🔄 **Hot reload** trong development- 📈 **Logging** và monitoring

- 🔄 **Hot reload** trong development

## 🛠️ Công nghệ sử dụng

## 🛠️ Công nghệ sử dụng

### Backend Framework & Runtime

- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white) **Node.js**: Runtime environment cho JavaScript### Backend Framework & Runtime

- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) **TypeScript**: Superset của JavaScript với type safety- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white) **Node.js**: Runtime environment cho JavaScript

- ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat&logo=express&logoColor=white) **Express.js**: Web framework cho Node.js- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) **TypeScript**: Superset của JavaScript với type safety

- **ts-node**: TypeScript execution engine cho Node.js- ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat&logo=express&logoColor=white) **Express.js**: Web framework cho Node.js

- **ts-node**: TypeScript execution engine cho Node.js

### Cơ sở dữ liệu & ORM

- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white) **PostgreSQL**: Hệ quản trị cơ sở dữ liệu quan hệ### Cơ sở dữ liệu & ORM

- **Prisma**: Modern ORM cho TypeScript và Node.js- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white) **PostgreSQL**: Hệ quản trị cơ sở dữ liệu quan hệ

- ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white) **Docker**: Container hóa PostgreSQL database- **Prisma**: Modern ORM cho TypeScript và Node.js

- ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white) **Docker**: Container hóa PostgreSQL database

### Security & Middleware

- **Helmet**: Bảo mật HTTP headers### Security & Middleware

- **CORS**: Cross-Origin Resource Sharing- **Helmet**: Bảo mật HTTP headers

- **Express Rate Limit**: Rate limiting middleware- **CORS**: Cross-Origin Resource Sharing

- **Morgan**: HTTP request logger- **Express Rate Limit**: Rate limiting middleware

- **Compression**: Gzip compression middleware- **Morgan**: HTTP request logger

- **JSON Web Token**: Authentication tokens- **Compression**: Gzip compression middleware

- **JSON Web Token**: Authentication tokens

### Development Tools

- **ESLint**: Code linting và style checking### Development Tools

- **Prettier**: Code formatting- **ESLint**: Code linting và style checking

- **Nodemon**: Auto-restart trong development- **Prettier**: Code formatting

- **PM2**: Process manager cho production- **Nodemon**: Auto-restart trong development

- **PM2**: Process manager cho production

### Utilities

- **Lodash**: JavaScript utility library### Utilities

- **Axios**: HTTP client- **Lodash**: JavaScript utility library

- **dotenv**: Environment variables management- **Axios**: HTTP client

- **Signale**: Elegant console logger- **dotenv**: Environment variables management

- **Signale**: Elegant console logger

## 📁 Cấu trúc dự án

## 📁 Cấu trúc dự án

```

ai-backend/```

├── app/                              # Thư mục chính của ứng dụngai-backend/

│   ├── src/                          # Source code├── app/                              # Thư mục chính của ứng dụng

│   │   ├── main.ts                   # Entry point của ứng dụng│   ├── src/                          # Source code

│   │   ├── app.ts                    # Express app configuration│   │   ├── main.ts                   # Entry point của ứng dụng

│   │   ├── configs/                  # Cấu hình ứng dụng│   │   ├── app.ts                    # Express app configuration

│   │   │   └── server.config.ts      # Cấu hình server│   │   ├── configs/                  # Cấu hình ứng dụng

│   │   ├── constants/                # Hằng số và constants│   │   │   └── server.config.ts      # Cấu hình server

│   │   │   └── response.constant.ts  # Response constants│   │   ├── constants/                # Hằng số và constants

│   │   ├── controllers/              # Controller layer (MVC)│   │   │   └── response.constant.ts  # Response constants

│   │   │   ├── order.controller.ts   # Order business logic│   │   ├── controllers/              # Controller layer (MVC)

│   │   │   ├── product.controller.ts # Product business logic│   │   │   ├── order.controller.ts   # Order business logic

│   │   │   └── user.controller.ts    # User business logic│   │   │   ├── product.controller.ts # Product business logic

│   │   ├── core/                     # Core utilities│   │   │   └── user.controller.ts    # User business logic

│   │   │   ├── database.core.ts      # Database connection│   │   ├── core/                     # Core utilities

│   │   │   ├── logger.core.ts        # Logging utility│   │   │   ├── database.core.ts      # Database connection

│   │   │   └── response.core.ts      # Response helper│   │   │   ├── logger.core.ts        # Logging utility

│   │   ├── middlewares/              # Express middlewares│   │   │   └── response.core.ts      # Response helper

│   │   │   ├── auth.middleware.ts    # Authentication middleware│   │   ├── middlewares/              # Express middlewares

│   │   │   ├── error.middleware.ts   # Error handling│   │   │   ├── auth.middleware.ts    # Authentication middleware

│   │   │   └── limiter.middleware.ts # Rate limiting│   │   │   ├── error.middleware.ts   # Error handling

│   │   ├── repositories/             # Data access layer│   │   │   └── limiter.middleware.ts # Rate limiting

│   │   │   ├── order.repository.ts   # Order data operations│   │   ├── repositories/             # Data access layer

│   │   │   ├── product.repository.ts # Product data operations│   │   │   ├── order.repository.ts   # Order data operations

│   │   │   └── user.repository.ts    # User data operations│   │   │   ├── product.repository.ts # Product data operations

│   │   ├── routes/                   # API routes│   │   │   └── user.repository.ts    # User data operations

│   │   │   ├── index.ts              # Main router│   │   ├── routes/                   # API routes

│   │   │   ├── v1/                   # API version 1│   │   │   ├── index.ts              # Main router

│   │   │   │   ├── index.ts          # V1 router│   │   │   ├── v1/                   # API version 1

│   │   │   │   ├── order.route.ts    # Order endpoints│   │   │   │   ├── index.ts          # V1 router

│   │   │   │   ├── product.route.ts  # Product endpoints│   │   │   │   ├── order.route.ts    # Order endpoints

│   │   │   │   └── user.route.ts     # User endpoints│   │   │   │   ├── product.route.ts  # Product endpoints

│   │   │   └── v2/                   # API version 2│   │   │   │   └── user.route.ts     # User endpoints

│   │   │       └── index.ts          # V2 router│   │   │   └── v2/                   # API version 2

│   │   ├── services/                 # Business logic layer│   │   │       └── index.ts          # V2 router

│   │   │   ├── order.service.ts      # Order business logic│   │   ├── services/                 # Business logic layer

│   │   │   ├── product.service.ts    # Product business logic│   │   │   ├── order.service.ts      # Order business logic

│   │   │   └── user.service.ts       # User business logic│   │   │   ├── product.service.ts    # Product business logic

│   │   ├── types/                    # TypeScript type definitions│   │   │   └── user.service.ts       # User business logic

│   │   │   ├── common/               # Common types│   │   ├── types/                    # TypeScript type definitions

│   │   │   │   ├── config.types.ts   # Configuration types│   │   │   ├── common/               # Common types

│   │   │   │   ├── document.types.ts # Document types│   │   │   │   ├── config.types.ts   # Configuration types

│   │   │   │   └── response.types.ts # Response types│   │   │   │   ├── document.types.ts # Document types

│   │   │   └── dtos/                 # Data Transfer Objects│   │   │   │   └── response.types.ts # Response types

│   │   │       ├── index.ts          # DTO exports│   │   │   └── dtos/                 # Data Transfer Objects

│   │   │       ├── order.dto.ts      # Order DTOs│   │   │       ├── index.ts          # DTO exports

│   │   │       ├── product.dto.ts    # Product DTOs│   │   │       ├── order.dto.ts      # Order DTOs

│   │   │       └── user.dto.ts       # User DTOs│   │   │       ├── product.dto.ts    # Product DTOs

│   │   ├── utils/                    # Utility functions│   │   │       └── user.dto.ts       # User DTOs

│   │   │   └── async-wrapper.util.ts # Async error wrapper│   │   ├── utils/                    # Utility functions

│   │   ├── sample/                   # Sample data│   │   │   └── async-wrapper.util.ts # Async error wrapper

│   │   │   └── seed.ts               # Database seeding│   │   ├── sample/                   # Sample data

│   │   ├── public/                   # Static assets│   │   │   └── seed.ts               # Database seeding

│   │   │   └── favicon.png           # Application favicon│   │   ├── public/                   # Static assets

│   │   └── logs/                     # Application logs│   │   │   └── favicon.png           # Application favicon

│   │       └── app.log               # Main log file│   │   └── logs/                     # Application logs

│   ├── prisma/                       # Prisma ORM configuration│   │       └── app.log               # Main log file

│   │   ├── schema.prisma             # Database schema│   ├── prisma/                       # Prisma ORM configuration

│   │   └── migrations/               # Database migrations│   │   ├── schema.prisma             # Database schema

│   │       ├── migration_lock.toml   # Migration lock│   │   └── migrations/               # Database migrations

│   │       └── 20251003075216_init/  # Initial migration│   │       ├── migration_lock.toml   # Migration lock

│   │           └── migration.sql     # SQL migration file│   │       └── 20251003075216_init/  # Initial migration

│   ├── package.json                  # Dependencies và scripts│   │           └── migration.sql     # SQL migration file

│   ├── tsconfig.json                 # TypeScript configuration│   ├── package.json                  # Dependencies và scripts

│   ├── eslint.config.js              # ESLint configuration│   ├── tsconfig.json                 # TypeScript configuration

│   ├── nodemon.json                  # Nodemon configuration│   ├── eslint.config.js              # ESLint configuration

│   └── ecosystem.config.js           # PM2 configuration│   ├── nodemon.json                  # Nodemon configuration

├── postgres/                         # PostgreSQL Docker setup│   └── ecosystem.config.js           # PM2 configuration

│   ├── docker-compose.yml            # Docker Compose config├── postgres/                         # PostgreSQL Docker setup

│   └── postgresql.conf               # PostgreSQL configuration│   ├── docker-compose.yml            # Docker Compose config

└── docs/                            # API Documentation│   └── postgresql.conf               # PostgreSQL configuration

    ├── openapi.json                 # OpenAPI specification (JSON)└── docs/                            # API Documentation

    ├── openapi.yaml                 # OpenAPI specification (YAML)    ├── openapi.json                 # OpenAPI specification (JSON)

    └── postman.json                 # Postman collection    ├── openapi.yaml                 # OpenAPI specification (YAML)

```    └── postman.json                 # Postman collection

```

## 🗄️ Database Schema

```

Dự án sử dụng **PostgreSQL** với **3 bảng chính**:

## 🗄️ Database Schema

### 👤 Users

- `id`: Primary key (auto increment)### 2. Cài đặt dependencies

- `name`: Tên người dùng

- `created_at`, `updated_at`: Timestamps```bashDự án sử dụng **PostgreSQL** với **3 bảng chính**:



### 📦 Productscd app

- `id`: Primary key (auto increment)

- `name`: Tên sản phẩmnpm install### 👤 Users

- `unit`: Đơn vị tính

- `origin`: Xuất xứ```- `id`: Primary key (auto increment)

- `note`: Ghi chú (optional)

- `is_active`: Trạng thái hoạt động- `name`: Tên người dùng

- `created_at`, `updated_at`: Timestamps

### 3. Thiết lập cơ sở dữ liệu- `created_at`, `updated_at`: Timestamps

### 📋 Orders

- `id`: Primary key (auto increment)

- `user_id`: Foreign key → Users

- `product_id`: Foreign key → Products#### Option A: Sử dụng Docker (Khuyến nghị)### 📦 Products

- `quantity`: Số lượng

- `purpose`: Mục đích sử dụng (optional)```bash- `id`: Primary key (auto increment)

- `created_at`, `updated_at`: Timestamps

cd ../postgres- `name`: Tên sản phẩm

## 🚀 Cài đặt và chạy dự án

docker-compose up -d- `unit`: Đơn vị tính

### Yêu cầu hệ thống

- **Node.js** >= 18.0.0```- `origin`: Xuất xứ

- **npm** hoặc **yarn**

- **PostgreSQL** >= 16- `note`: Ghi chú (optional)

- **Docker** & **Docker Compose** (optional)

#### Option B: PostgreSQL local- `is_active`: Trạng thái hoạt động

### 1. Clone repository

```bashTạo database local và cập nhật connection string trong `.env`- `created_at`, `updated_at`: Timestamps

git clone https://github.com/MeadowPham2506/ai-backend.git

cd ai-backend

```

### 4. Cấu hình môi trường### 📋 Orders

### 2. Cài đặt dependencies

```bashTạo file `.env` trong thư mục `app/`:- `id`: Primary key (auto increment)

cd app

npm install```env- `user_id`: Foreign key → Users

# hoặc

yarn install# Database- `product_id`: Foreign key → Products

```

PRISMA_DATABASE_URL="postgresql://postgres:postgres123@localhost:5432/production_db"- `quantity`: Số lượng

### 3. Thiết lập cơ sở dữ liệu

- `purpose`: Mục đích sử dụng (optional)

#### Option A: Sử dụng Docker (Khuyến nghị)

```bash# Server- `created_at`, `updated_at`: Timestamps

cd ../postgres

docker-compose up -dPORT=3000

```

NODE_ENV=development## 🚀 Cài đặt và chạy dự án

#### Option B: PostgreSQL local

Tạo database local và cập nhật connection string trong `.env`



### 4. Cấu hình môi trường# JWT (nếu sử dụng authentication)### Yêu cầu hệ thống

Tạo file `.env` trong thư mục `app/`:

```envJWT_SECRET=your-secret-key- **Node.js** >= 18.0.0

# Database

PRISMA_DATABASE_URL="postgresql://postgres:postgres123@localhost:5432/production_db"```- **npm** hoặc **yarn**



# Server- **PostgreSQL** >= 16

PORT=3000

NODE_ENV=development### 5. Chạy migration- **Docker** & **Docker Compose** (optional)



# JWT (nếu sử dụng authentication)```bash

JWT_SECRET=your-secret-key

```cd app### 1. Clone repository



### 5. Chạy migrationnpx prisma migrate dev```bash

```bash

cd appnpx prisma generategit clone https://github.com/MeadowPham2506/ai-backend.git

npx prisma migrate dev

npx prisma generate```cd ai-backend

```

```

### 6. Seed dữ liệu mẫu (optional)

```bash### 6. Seed dữ liệu mẫu (optional)

npm run seed

``````bash### 2. Cài đặt dependencies



### 7. Khởi động servernpm run seed```bash



#### Development mode```cd app

```bash

npm run devnpm install

```

### 7. Khởi động server# hoặc

#### Production mode

```bashyarn install

npm run build

npm start#### Development mode```

```

```bash

#### Sử dụng PM2

```bashnpm run dev### 3. Thiết lập cơ sở dữ liệu

npm install -g pm2

pm2 start ecosystem.config.js```

```

#### Option A: Sử dụng Docker (Khuyến nghị)

Server sẽ chạy tại: `http://localhost:3000`

#### Production mode```bash

## 📚 API Documentation

```bashcd ../postgres

### Base URL

```npm run builddocker-compose up -d

http://localhost:3000/api/v1

```npm start```



### Endpoints chính```



#### 👤 Users#### Option B: PostgreSQL local

- `GET /api/v1/users` - Lấy danh sách users

- `POST /api/v1/users` - Tạo user mới#### Sử dụng PM2Tạo database local và cập nhật connection string trong `.env`

- `GET /api/v1/users/:id` - Lấy thông tin user

- `PUT /api/v1/users/:id` - Cập nhật user```bash

- `DELETE /api/v1/users/:id` - Xóa user

npm install -g pm2### 4. Cấu hình môi trường

#### 📦 Products

- `GET /api/v1/products` - Lấy danh sách sản phẩmpm2 start ecosystem.config.jsTạo file `.env` trong thư mục `app/`:

- `POST /api/v1/products` - Tạo sản phẩm mới

- `GET /api/v1/products/:id` - Lấy thông tin sản phẩm``````env

- `PUT /api/v1/products/:id` - Cập nhật sản phẩm

- `DELETE /api/v1/products/:id` - Xóa sản phẩm# Database



#### 📋 OrdersServer sẽ chạy tại: `http://localhost:3000`PRISMA_DATABASE_URL="postgresql://postgres:postgres123@localhost:5432/production_db"

- `GET /api/v1/orders` - Lấy danh sách đơn hàng

- `POST /api/v1/orders` - Tạo đơn hàng mới

- `GET /api/v1/orders/:id` - Lấy thông tin đơn hàng

- `PUT /api/v1/orders/:id` - Cập nhật đơn hàng## 📚 API Documentation# Server

- `DELETE /api/v1/orders/:id` - Xóa đơn hàng

PORT=3000

### 📄 Tài liệu API chi tiết

- **OpenAPI Spec**: `/docs/openapi.yaml`### Base URLNODE_ENV=development

- **Postman Collection**: `/docs/postman.json`

```

## 🧪 Scripts NPM

http://localhost:3000/api/v1# JWT (nếu sử dụng authentication)

```bash

# Development```JWT_SECRET=your-secret-key

npm run dev          # Chạy server với hot reload

npm run build        # Build TypeScript to JavaScript```

npm start            # Chạy production server

### Endpoints chính

# Code Quality

npm run lint         # Chạy ESLint### 5. Chạy migration

npm run format       # Format code với Prettier

#### 👤 Users```bash

# Database

npm run seed         # Seed dữ liệu mẫu- `GET /api/v1/users` - Lấy danh sách userscd app

npx prisma studio    # Mở Prisma Studio

npx prisma generate  # Generate Prisma client- `POST /api/v1/users` - Tạo user mớinpx prisma migrate dev

```

- `GET /api/v1/users/:id` - Lấy thông tin user```

## 🛡️ Security Features

- `PUT /api/v1/users/:id` - Cập nhật user

- **Helmet**: Security headers protection

- **CORS**: Cross-origin resource sharing control- `DELETE /api/v1/users/:id` - Xóa user### 6. Seed dữ liệu mẫu (optional)

- **Rate Limiting**: API rate limiting middleware

- **Input Validation**: Request validation với DTOs```bash

- **JWT Authentication**: Token-based authentication

- **Error Handling**: Centralized error management#### 📦 Productsnpm run seed



## 📊 Monitoring & Logging- `GET /api/v1/products` - Lấy danh sách sản phẩm```



- **Morgan**: HTTP request logging- `POST /api/v1/products` - Tạo sản phẩm mới

- **Signale**: Elegant console logging

- **Log Files**: Automatic log rotation- `GET /api/v1/products/:id` - Lấy thông tin sản phẩm### 7. Khởi động server

- **Health Checks**: Database connection monitoring

- `PUT /api/v1/products/:id` - Cập nhật sản phẩm

## 🐳 Docker Support

- `DELETE /api/v1/products/:id` - Xóa sản phẩm#### Development mode

### PostgreSQL Container

```bash```bash

cd postgres

docker-compose up -d#### 📋 Ordersnpm run dev

```

- `GET /api/v1/orders` - Lấy danh sách đơn hàng```

### Environment Variables

- `POSTGRES_USER`: Database user- `POST /api/v1/orders` - Tạo đơn hàng mới

- `POSTGRES_PASSWORD`: Database password

- `POSTGRES_DB`: Database name- `GET /api/v1/orders/:id` - Lấy thông tin đơn hàng#### Production mode



## 🔧 Cấu hình- `PUT /api/v1/orders/:id` - Cập nhật đơn hàng```bash



### TypeScript- `DELETE /api/v1/orders/:id` - Xóa đơn hàngnpm run build

- `tsconfig.json`: TypeScript configuration

- Path aliases được thiết lập (`@src/*`)npm start



### ESLint & Prettier## 🧪 Scripts NPM```

- `eslint.config.js`: ESLint rules

- Code formatting tự động với Prettier



### PM2 (Production)```bash#### Sử dụng PM2

- `ecosystem.config.js`: PM2 process configuration

- Memory limit: 4GB# Development```bash

- Auto restart: enabled

npm run dev          # Chạy server với hot reloadnpm install -g pm2

## 🤝 Contributing

npm run build        # Build TypeScript to JavaScriptpm2 start ecosystem.config.js

1. Fork repository

2. Tạo feature branch (`git checkout -b feature/amazing-feature`)npm start            # Chạy production server```

3. Commit changes (`git commit -m 'Add some amazing feature'`)

4. Push to branch (`git push origin feature/amazing-feature`)

5. Tạo Pull Request

# Code QualityServer sẽ chạy tại: `http://localhost:3000`

## 📝 License

npm run lint         # Chạy ESLint

Distributed under the MIT License. See `LICENSE` for more information.

npm run format       # Format code với Prettier## 📚 API Documentation

## 👨‍💻 Author



**ThanhPH** - [MeadowPham2506](https://github.com/MeadowPham2506)

# Database### Base URL

## 📞 Liên hệ

npm run seed         # Seed dữ liệu mẫu```

- GitHub: [@MeadowPham2506](https://github.com/MeadowPham2506)

- Email: thanhph2k3@example.comnpx prisma studio    # Mở Prisma Studiohttp://localhost:3000/api/v1



---npx prisma generate  # Generate Prisma client```



⭐ Nếu dự án này hữu ích, hãy cho một star nhé!```

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