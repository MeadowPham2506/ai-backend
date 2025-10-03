# AI Backend 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7%2B-blue.svg)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue.svg)](https://www.postgresql.org/)

## 📋 Tổng quan dự án

**AI Backend** là một ứng dụng backend hiện đại được xây dựng với **Node.js**, **TypeScript**, **Express.js** và **Prisma ORM**. Dự án được thiết kế theo kiến trúc **MVC** với cấu trúc thư mục được tổ chức rõ ràng và sử dụng **PostgreSQL** làm cơ sở dữ liệu chính.

### ✨ Tính năng chính

- 🔐 **Authentication & Authorization** với JWT
- 📊 **RESTful API** với cấu trúc rõ ràng
- 🛡️ **Security** tích hợp (Helmet, CORS, Rate Limiting)
- 📝 **Database Management** với Prisma ORM
- � **Docker** support cho PostgreSQL
- 🚦 **Process Management** với PM2
- 📈 **Logging** và monitoring
- 🔄 **Hot reload** trong development

## 🛠️ Công nghệ sử dụng

### Backend Framework & Runtime
- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white) **Node.js**: Runtime environment cho JavaScript
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) **TypeScript**: Superset của JavaScript với type safety
- ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat&logo=express&logoColor=white) **Express.js**: Web framework cho Node.js
- **ts-node**: TypeScript execution engine cho Node.js

### Cơ sở dữ liệu & ORM
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white) **PostgreSQL**: Hệ quản trị cơ sở dữ liệu quan hệ
- **Prisma**: Modern ORM cho TypeScript và Node.js
- ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white) **Docker**: Container hóa PostgreSQL database

### Security & Middleware
- **Helmet**: Bảo mật HTTP headers
- **CORS**: Cross-Origin Resource Sharing
- **Express Rate Limit**: Rate limiting middleware
- **Morgan**: HTTP request logger
- **Compression**: Gzip compression middleware
- **JSON Web Token**: Authentication tokens

### Development Tools
- **ESLint**: Code linting và style checking
- **Prettier**: Code formatting
- **Nodemon**: Auto-restart trong development
- **PM2**: Process manager cho production

### Utilities
- **Lodash**: JavaScript utility library
- **Axios**: HTTP client
- **dotenv**: Environment variables management
- **Signale**: Elegant console logger

## 📁 Cấu trúc dự án

```
ai-backend/
├── app/                              # Thư mục chính của ứng dụng
│   ├── src/                          # Source code
│   │   ├── main.ts                   # Entry point của ứng dụng
│   │   ├── app.ts                    # Express app configuration
│   │   ├── configs/                  # Cấu hình ứng dụng
│   │   │   └── server.config.ts      # Cấu hình server
│   │   ├── constants/                # Hằng số và constants
│   │   │   └── response.constant.ts  # Response constants
│   │   ├── controllers/              # Controller layer (MVC)
│   │   │   ├── order.controller.ts   # Order business logic
│   │   │   ├── product.controller.ts # Product business logic
│   │   │   └── user.controller.ts    # User business logic
│   │   ├── core/                     # Core utilities
│   │   │   ├── database.core.ts      # Database connection
│   │   │   ├── logger.core.ts        # Logging utility
│   │   │   └── response.core.ts      # Response helper
│   │   ├── middlewares/              # Express middlewares
│   │   │   ├── auth.middleware.ts    # Authentication middleware
│   │   │   ├── error.middleware.ts   # Error handling
│   │   │   └── limiter.middleware.ts # Rate limiting
│   │   ├── repositories/             # Data access layer
│   │   │   ├── order.repository.ts   # Order data operations
│   │   │   ├── product.repository.ts # Product data operations
│   │   │   └── user.repository.ts    # User data operations
│   │   ├── routes/                   # API routes
│   │   │   ├── index.ts              # Main router
│   │   │   ├── v1/                   # API version 1
│   │   │   │   ├── index.ts          # V1 router
│   │   │   │   ├── order.route.ts    # Order endpoints
│   │   │   │   ├── product.route.ts  # Product endpoints
│   │   │   │   └── user.route.ts     # User endpoints
│   │   │   └── v2/                   # API version 2
│   │   │       └── index.ts          # V2 router
│   │   ├── services/                 # Business logic layer
│   │   │   ├── order.service.ts      # Order business logic
│   │   │   ├── product.service.ts    # Product business logic
│   │   │   └── user.service.ts       # User business logic
│   │   ├── types/                    # TypeScript type definitions
│   │   │   ├── common/               # Common types
│   │   │   │   ├── config.types.ts   # Configuration types
│   │   │   │   ├── document.types.ts # Document types
│   │   │   │   └── response.types.ts # Response types
│   │   │   └── dtos/                 # Data Transfer Objects
│   │   │       ├── index.ts          # DTO exports
│   │   │       ├── order.dto.ts      # Order DTOs
│   │   │       ├── product.dto.ts    # Product DTOs
│   │   │       └── user.dto.ts       # User DTOs
│   │   ├── utils/                    # Utility functions
│   │   │   └── async-wrapper.util.ts # Async error wrapper
│   │   ├── sample/                   # Sample data
│   │   │   └── seed.ts               # Database seeding
│   │   ├── public/                   # Static assets
│   │   │   └── favicon.png           # Application favicon
│   │   └── logs/                     # Application logs
│   │       └── app.log               # Main log file
│   ├── prisma/                       # Prisma ORM configuration
│   │   ├── schema.prisma             # Database schema
│   │   └── migrations/               # Database migrations
│   │       ├── migration_lock.toml   # Migration lock
│   │       └── 20251003075216_init/  # Initial migration
│   │           └── migration.sql     # SQL migration file
│   ├── package.json                  # Dependencies và scripts
│   ├── tsconfig.json                 # TypeScript configuration
│   ├── eslint.config.js              # ESLint configuration
│   ├── nodemon.json                  # Nodemon configuration
│   └── ecosystem.config.js           # PM2 configuration
├── postgres/                         # PostgreSQL Docker setup
│   ├── docker-compose.yml            # Docker Compose config
│   └── postgresql.conf               # PostgreSQL configuration
└── docs/                            # API Documentation
    ├── openapi.json                 # OpenAPI specification (JSON)
    ├── openapi.yaml                 # OpenAPI specification (YAML)
    └── postman.json                 # Postman collection
```

## 🗄️ Database Schema

Dự án sử dụng **PostgreSQL** với **3 bảng chính**:

### 👤 Users
- `id`: Primary key (auto increment)
- `name`: Tên người dùng
- `created_at`, `updated_at`: Timestamps

### 📦 Products
- `id`: Primary key (auto increment)
- `name`: Tên sản phẩm
- `unit`: Đơn vị tính
- `origin`: Xuất xứ
- `note`: Ghi chú (optional)
- `is_active`: Trạng thái hoạt động
- `created_at`, `updated_at`: Timestamps

### 📋 Orders
- `id`: Primary key (auto increment)
- `user_id`: Foreign key → Users
- `product_id`: Foreign key → Products
- `quantity`: Số lượng
- `purpose`: Mục đích sử dụng (optional)
- `created_at`, `updated_at`: Timestamps

## 🚀 Cài đặt và chạy dự án

### Yêu cầu hệ thống
- **Node.js** >= 18.0.0
- **npm** hoặc **yarn**
- **PostgreSQL** >= 16
- **Docker** & **Docker Compose** (optional)

### 1. Clone repository
```bash
git clone https://github.com/MeadowPham2506/ai-backend.git
cd ai-backend
```

### 2. Cài đặt dependencies
```bash
cd app
npm install
# hoặc
yarn install
```

### 3. Thiết lập cơ sở dữ liệu

#### Option A: Sử dụng Docker (Khuyến nghị)
```bash
cd ../postgres
docker-compose up -d
```

#### Option B: PostgreSQL local
Tạo database local và cập nhật connection string trong `.env`

### 4. Cấu hình môi trường
Tạo file `.env` trong thư mục `app/`:
```env
# Database
PRISMA_DATABASE_URL="postgresql://postgres:postgres123@localhost:5432/production_db"

# Server
PORT=3000
NODE_ENV=development

# JWT (nếu sử dụng authentication)
JWT_SECRET=your-secret-key
```

### 5. Chạy migration
```bash
cd app
npx prisma migrate dev
```

### 6. Seed dữ liệu mẫu (optional)
```bash
npm run seed
```

### 7. Khởi động server

#### Development mode
```bash
npm run dev
```

#### Production mode
```bash
npm run build
npm start
```

#### Sử dụng PM2
```bash
npm install -g pm2
pm2 start ecosystem.config.js
```

Server sẽ chạy tại: `http://localhost:3000`

## 📚 API Documentation

### Base URL
```
http://localhost:3000/api/v1
```

### Endpoints chính

#### 👤 Users
- `GET /api/v1/users` - Lấy danh sách users
- `POST /api/v1/users` - Tạo user mới
- `GET /api/v1/users/:id` - Lấy thông tin user
- `PUT /api/v1/users/:id` - Cập nhật user
- `DELETE /api/v1/users/:id` - Xóa user

#### 📦 Products
- `GET /api/v1/products` - Lấy danh sách sản phẩm
- `POST /api/v1/products` - Tạo sản phẩm mới
- `GET /api/v1/products/:id` - Lấy thông tin sản phẩm
- `PUT /api/v1/products/:id` - Cập nhật sản phẩm
- `DELETE /api/v1/products/:id` - Xóa sản phẩm

#### 📋 Orders
- `GET /api/v1/orders` - Lấy danh sách đơn hàng
- `POST /api/v1/orders` - Tạo đơn hàng mới
- `GET /api/v1/orders/:id` - Lấy thông tin đơn hàng
- `PUT /api/v1/orders/:id` - Cập nhật đơn hàng
- `DELETE /api/v1/orders/:id` - Xóa đơn hàng

### 📄 Tài liệu API chi tiết
- **OpenAPI Spec**: `/docs/openapi.yaml`
- **Postman Collection**: `/docs/postman.json`

## 🧪 Scripts NPM

```bash
# Development
npm run dev          # Chạy server với hot reload
npm run build        # Build TypeScript to JavaScript
npm start            # Chạy production server

# Code Quality
npm run lint         # Chạy ESLint
npm run format       # Format code với Prettier

# Database
npm run seed         # Seed dữ liệu mẫu
npx prisma studio    # Mở Prisma Studio
npx prisma generate  # Generate Prisma client
```

## 🔧 Cấu hình

### TypeScript
- `tsconfig.json`: TypeScript configuration
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