# AI Backend

## 📋 Tổng quan dự án

AI Backend là một ứng dụng backend được xây dựng với Node.js, TypeScript, Express.js và Prisma ORM. Dự án được thiết kế theo kiến trúc MVC với cấu trúc thư mục được tổ chức rõ ràng, sử dụng PostgreSQL làm cơ sở dữ liệu.

## 🚀 Công nghệ sử dụng

### Backend Framework & Runtime
- **Node.js**: Runtime environment cho JavaScript
- **TypeScript**: Superset của JavaScript với type safety
- **Express.js**: Web framework cho Node.js
- **ts-node**: TypeScript execution engine cho Node.js

### Cơ sở dữ liệu
- **PostgreSQL**: Hệ quản trị cơ sở dữ liệu quan hệ
- **Prisma**: Modern ORM cho TypeScript và Node.js
- **Docker**: Container hóa PostgreSQL database

### Security & Middleware
- **Helmet**: Bảo mật HTTP headers
- **CORS**: Cross-Origin Resource Sharing
- **Express Rate Limit**: Rate limiting middleware
- **Morgan**: HTTP request logger
- **Compression**: Gzip compression middleware

### Development Tools
- **ESLint**: Code linting và style checking
- **Prettier**: Code formatting
- **Nodemon**: Auto-restart trong development
- **PM2**: Process manager cho production (ecosystem.config.js)

### Utilities
- **Lodash**: JavaScript utility library
- **Axios**: HTTP client
- **dotenv**: Environment variables management
- **Signale**: Elegant console logger
- **JSON Web Token**: Authentication tokens

## 📁 Cấu trúc thư mục

```
ai-backend/
├── app/                          # Thư mục chính của ứng dụng
│   ├── src/                      # Source code
│   │   ├── main.ts              # Entry point của ứng dụng
│   │   ├── app.ts               # Express app configuration
│   │   ├── configs/             # Cấu hình ứng dụng
│   │   │   └── server.config.ts # Cấu hình server
│   │   ├── constants/           # Hằng số
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