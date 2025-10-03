import { PrismaClient } from '@src/generated/prisma';

const prisma = new PrismaClient();

// Sample data arrays
const userNames = [
    'Nguyễn Văn An',
    'Trần Thị Bích',
    'Lê Hoàng Cường',
    'Phạm Thị Dung',
    'Hoàng Văn Em',
    'Vũ Thị Giang',
    'Đặng Minh Hải',
    'Lý Thị Hoa',
    'Bùi Văn Khoa',
    'Ngô Thị Lan'
];

const productData = [
    // Trái cây
    { name: 'Táo Fuji', unit: 'kg', origin: 'Nhật Bản', note: 'Táo ngọt, giòn' },
    { name: 'Chuối Cavendish', unit: 'nải', origin: 'Philippines', note: 'Chuối chín vàng' },
    { name: 'Cam Sành', unit: 'kg', origin: 'Việt Nam', note: 'Cam ngọt tự nhiên' },
    { name: 'Xoài Cát Chu', unit: 'kg', origin: 'Việt Nam', note: 'Xoài thơm ngon' },
    { name: 'Nho Mỹ', unit: 'kg', origin: 'Mỹ', note: 'Nho không hạt' },
    { name: 'Dứa Hawaii', unit: 'quả', origin: 'Hawaii', note: 'Dứa ngọt thơm' },
    { name: 'Thanh Long Ruột Đỏ', unit: 'kg', origin: 'Việt Nam', note: 'Thanh long tươi' },
    { name: 'Kiwi New Zealand', unit: 'kg', origin: 'New Zealand', note: 'Kiwi tươi ngon' },
    { name: 'Lê Nam Phi', unit: 'kg', origin: 'Nam Phi', note: 'Lê ngọt mát' },
    { name: 'Dâu Tây Đà Lạt', unit: 'hộp', origin: 'Việt Nam', note: 'Dâu tây tươi' },
    
    // Rau củ
    { name: 'Cà Rót Baby', unit: 'kg', origin: 'Đà Lạt', note: 'Cà rót nhỏ ngọt' },
    { name: 'Bông Cải Xanh', unit: 'kg', origin: 'Đà Lạt', note: 'Bông cải tươi' },
    { name: 'Cà Chua Cherry', unit: 'kg', origin: 'Đà Lạt', note: 'Cà chua bi ngọt' },
    { name: 'Ớt Chuông Đỏ', unit: 'kg', origin: 'Đà Lạt', note: 'Ớt chuông tươi' },
    { name: 'Su Hào', unit: 'kg', origin: 'Việt Nam', note: 'Su hào giòn ngọt' },
    { name: 'Khoai Tây Đà Lạt', unit: 'kg', origin: 'Đà Lạt', note: 'Khoai tây sạch' },
    { name: 'Củ Dền Đỏ', unit: 'kg', origin: 'Đà Lạt', note: 'Củ dền organic' },
    { name: 'Rau Muống', unit: 'bó', origin: 'Việt Nam', note: 'Rau muống tươi' },
    { name: 'Cải Thìa', unit: 'kg', origin: 'Việt Nam', note: 'Cải thìa xanh' },
    { name: 'Dưa Chuột Baby', unit: 'kg', origin: 'Đà Lạt', note: 'Dưa chuột nhỏ' },
    
    // Thịt cá
    { name: 'Thịt Bò Úc', unit: 'kg', origin: 'Úc', note: 'Thịt bò tươi' },
    { name: 'Thịt Heo Sạch', unit: 'kg', origin: 'Việt Nam', note: 'Thịt heo VietGAP' },
    { name: 'Gà Ta Đồi', unit: 'con', origin: 'Việt Nam', note: 'Gà ta thả đồi' },
    { name: 'Cá Hồi Na Uy', unit: 'kg', origin: 'Na Uy', note: 'Cá hồi tươi đông lạnh' },
    { name: 'Tôm Sú', unit: 'kg', origin: 'Cà Mau', note: 'Tôm sú tươi sống' },
    { name: 'Cua Biển', unit: 'kg', origin: 'Khánh Hòa', note: 'Cua biển tươi' },
    { name: 'Mực Ống', unit: 'kg', origin: 'Nha Trang', note: 'Mực ống tươi' },
    { name: 'Cá Ngừ', unit: 'kg', origin: 'Phú Yên', note: 'Cá ngừ đại dương' },
    { name: 'Ghẹ Xanh', unit: 'kg', origin: 'Cà Mau', note: 'Ghẹ xanh tươi sống' },
    { name: 'Bạch Tuộc', unit: 'kg', origin: 'Khánh Hòa', note: 'Bạch tuộc tươi' },
    
    // Gia vị
    { name: 'Muối Biển', unit: 'kg', origin: 'Việt Nam', note: 'Muối biển tự nhiên' },
    { name: 'Đường Phèn', unit: 'kg', origin: 'Việt Nam', note: 'Đường phèn nguyên chất' },
    { name: 'Nước Mắm Phú Quốc', unit: 'chai', origin: 'Phú Quốc', note: 'Nước mắm truyền thống' },
    { name: 'Dầu Ô Liu', unit: 'chai', origin: 'Ý', note: 'Dầu ô liu nguyên chất' },
    { name: 'Tiêu Đen Phú Quốc', unit: 'hộp', origin: 'Phú Quốc', note: 'Tiêu đen thơm cay' },
    { name: 'Quế Thanh Hóa', unit: 'gói', origin: 'Thanh Hóa', note: 'Quế thơm tự nhiên' },
    { name: 'Tỏi Lý Sơn', unit: 'kg', origin: 'Quảng Ngãi', note: 'Tỏi Lý Sơn đặc sản' },
    { name: 'Gừng Già', unit: 'kg', origin: 'Việt Nam', note: 'Gừng già cay nồng' },
    { name: 'Hành Tây Đà Lạt', unit: 'kg', origin: 'Đà Lạt', note: 'Hành tây tím' },
    { name: 'Nghệ Tươi', unit: 'kg', origin: 'Việt Nam', note: 'Nghệ tươi hữu cơ' },
    
    // Sữa và chế phẩm
    { name: 'Sữa Tươi Vinamilk', unit: 'lít', origin: 'Việt Nam', note: 'Sữa tươi thanh trùng' },
    { name: 'Phô Mai Cheddar', unit: 'hộp', origin: 'Úc', note: 'Phô mai cheddar thái lát' },
    { name: 'Yaourt Hy Lạp', unit: 'hộp', origin: 'Hy Lạp', note: 'Yaourt Hy Lạp nguyên chất' },
    { name: 'Bơ Anchor', unit: 'hộp', origin: 'New Zealand', note: 'Bơ lạt không muối' },
    { name: 'Kem Tươi', unit: 'hộp', origin: 'Pháp', note: 'Kem tươi 35% béo' },
    { name: 'Sữa Dê Tươi', unit: 'chai', origin: 'Việt Nam', note: 'Sữa dê organic' },
    { name: 'Phô Mai Mozzarella', unit: 'hộp', origin: 'Ý', note: 'Phô mai mozzarella tươi' },
    { name: 'Sữa Chua Không Đường', unit: 'hộp', origin: 'Việt Nam', note: 'Sữa chua probiotics' },
    { name: 'Whey Protein', unit: 'hộp', origin: 'Mỹ', note: 'Protein từ sữa' },
    { name: 'Condensed Milk', unit: 'lon', origin: 'Việt Nam', note: 'Sữa đặc có đường' },
    
    // Ngũ cốc
    { name: 'Gạo ST25', unit: 'kg', origin: 'An Giang', note: 'Gạo thơm đặc sản' },
    { name: 'Quinoa', unit: 'kg', origin: 'Peru', note: 'Hạt quinoa hữu cơ' },
    { name: 'Yến Mạch Úc', unit: 'kg', origin: 'Úc', note: 'Yến mạch nguyên hạt' },
    { name: 'Hạt Chia', unit: 'gói', origin: 'Mexico', note: 'Hạt chia omega-3' },
    { name: 'Mì Pasta', unit: 'gói', origin: 'Ý', note: 'Mì pasta semolina' },
    { name: 'Bánh Mì Đen', unit: 'ổ', origin: 'Đức', note: 'Bánh mì đen ngũ cốc' },
    { name: 'Granola Mix', unit: 'hộp', origin: 'Mỹ', note: 'Granola trái cây khô' },
    { name: 'Bột Mì Cao Cấp', unit: 'kg', origin: 'Canada', note: 'Bột mì số 13' },
    { name: 'Gạo Lứt Đỏ', unit: 'kg', origin: 'Việt Nam', note: 'Gạo lứt hữu cơ' },
    { name: 'Hạt Lanh', unit: 'gói', origin: 'Canada', note: 'Hạt lanh golden' },
    
    // Đồ uống
    { name: 'Nước Ép Cam Tươi', unit: 'chai', origin: 'Việt Nam', note: 'Nước ép cam 100%' },
    { name: 'Trà Xanh Thái Nguyên', unit: 'gói', origin: 'Thái Nguyên', note: 'Trà xanh cao cấp' },
    { name: 'Cà Phê Arabica', unit: 'kg', origin: 'Đắk Lắk', note: 'Cà phê rang xay' },
    { name: 'Nước Dừa Tươi', unit: 'quả', origin: 'Bến Tre', note: 'Nước dừa xiêm xanh' },
    { name: 'Kombucha', unit: 'chai', origin: 'Việt Nam', note: 'Trà lên men probiotics' },
    { name: 'Smoothie Mix', unit: 'gói', origin: 'Thái Lan', note: 'Bột làm sinh tố' },
    { name: 'Matcha Nhật Bản', unit: 'hộp', origin: 'Nhật Bản', note: 'Bột matcha ceremonial' },
    { name: 'Siro Vanilla', unit: 'chai', origin: 'Pháp', note: 'Siro vanilla tự nhiên' },
    { name: 'Mật Ong Rừng', unit: 'chai', origin: 'Việt Nam', note: 'Mật ong rừng nguyên chất' },
    { name: 'Nước Lọc Kiềm', unit: 'thùng', origin: 'Nhật Bản', note: 'Nước lọc pH 8.5' },
    
    // Đồ khô
    { name: 'Nấm Shiitake Khô', unit: 'kg', origin: 'Nhật Bản', note: 'Nấm shiitake cao cấp' },
    { name: 'Tôm Khô Cà Mau', unit: 'kg', origin: 'Cà Mau', note: 'Tôm khô đặc sản' },
    { name: 'Mực Khô Phan Thiết', unit: 'kg', origin: 'Phan Thiết', note: 'Mực khô thơm ngon' },
    { name: 'Hạt Điều Rang', unit: 'kg', origin: 'Bình Phước', note: 'Hạt điều rang muối' },
    { name: 'Khô Bò Đà Lạt', unit: 'gói', origin: 'Đà Lạt', note: 'Khô bò đặc sản' },
    { name: 'Mắm Tôm Tây Ninh', unit: 'hũ', origin: 'Tây Ninh', note: 'Mắm tôm đặc biệt' },
    { name: 'Muối Ớt Tôm', unit: 'hũ', origin: 'Việt Nam', note: 'Muối ớt tôm gia truyền' },
    { name: 'Chà Bông Heo', unit: 'hộp', origin: 'Việt Nam', note: 'Chà bông heo thơm ngon' },
    { name: 'Ruốc Tôm', unit: 'hộp', origin: 'Hải Phòng', note: 'Ruốc tôm đặc sản' },
    { name: 'Khô Gà Lá Chanh', unit: 'gói', origin: 'Việt Nam', note: 'Khô gà lá chanh cay' },
    
    // Đồ đông lạnh
    { name: 'Bánh Bao Nhân Thịt', unit: 'hộp', origin: 'Việt Nam', note: 'Bánh bao đông lạnh' },
    { name: 'Dim Sum Tôm', unit: 'hộp', origin: 'Hongkong', note: 'Dim sum tôm cao cấp' },
    { name: 'Pizza Margherita', unit: 'chiếc', origin: 'Ý', note: 'Pizza đông lạnh' },
    { name: 'Khoai Tây Chiên', unit: 'gói', origin: 'Bỉ', note: 'Khoai tây chiên đông lạnh' },
    { name: 'Bánh Gyoza', unit: 'hộp', origin: 'Nhật Bản', note: 'Bánh gyoza nhân thịt' },
    { name: 'Chả Cá Đà Nẵng', unit: 'gói', origin: 'Đà Nẵng', note: 'Chả cá đông lạnh' },
    { name: 'Nem Nướng Nha Trang', unit: 'gói', origin: 'Nha Trang', note: 'Nem nướng đặc sản' },
    { name: 'Bánh Tráng Nướng', unit: 'gói', origin: 'Đà Lạt', note: 'Bánh tráng nướng đông lạnh' },
    { name: 'Chả Lụa Đặc Biệt', unit: 'thanh', origin: 'Hà Nội', note: 'Chả lụa đông lạnh' },
    { name: 'Giò Thủ Hà Nội', unit: 'gói', origin: 'Hà Nội', note: 'Giò thủ truyền thống' },
    
    // Đồ ăn vặt
    { name: 'Bánh Tráng Trộn', unit: 'gói', origin: 'Tây Ninh', note: 'Bánh tráng trộn cay' },
    { name: 'Kẹo Dừa Bến Tre', unit: 'hộp', origin: 'Bến Tre', note: 'Kẹo dừa đặc sản' },
    { name: 'Mứt Tết Đà Lạt', unit: 'hộp', origin: 'Đà Lạt', note: 'Mứt trái cây Tết' },
    { name: 'Bánh Đậu Xanh', unit: 'hộp', origin: 'Hải Dương', note: 'Bánh đậu xanh thơm ngon' },
    { name: 'Khoai Khô Đà Lạt', unit: 'gói', origin: 'Đà Lạt', note: 'Khoai khô ngọt tự nhiên' },
    { name: 'Mứt Dẻo Hoa Quả', unit: 'hộp', origin: 'Việt Nam', note: 'Mứt dẻo không chất bảo quản' },
    { name: 'Bánh Quy Bơ', unit: 'hộp', origin: 'Đan Mạch', note: 'Bánh quy bơ cao cấp' },
    { name: 'Chocolate Đen', unit: 'thanh', origin: 'Bỉ', note: 'Chocolate đen 70% cacao' },
    { name: 'Kẹo Gậy Que', unit: 'hộp', origin: 'Nhật Bản', note: 'Kẹo gậy que nhiều vị' },
    { name: 'Bánh Quy Yến Mạch', unit: 'gói', origin: 'Úc', note: 'Bánh quy yến mạch healthy' }
];

const orderPurposes = [
    'Nấu ăn gia đình',
    'Tiệc sinh nhật',
    'Họp mặt bạn bè',
    'Nấu ăn cho khách',
    'Chuẩn bị Tết',
    'BBQ cuối tuần',
    'Nấu ăn dinh dưỡng',
    'Làm bánh',
    'Chuẩn bị đám cưới',
    'Picnic',
    'Nấu ăn cho trẻ nhỏ',
    'Làm quà tặng',
    'Ăn kiêng',
    'Dự trữ thực phẩm',
    'Nấu ăn chay'
];

async function main() {
    console.log('🌱 Starting database seeding...');

    // Clear existing data (optional - uncomment if you want to clear existing data)
    // await prisma.order.deleteMany();
    // await prisma.product.deleteMany();
    // await prisma.user.deleteMany();

    // Create Users
    console.log('👥 Creating users...');
    const users = [];
    for (let i = 0; i < 10; i++) {
        const user = await prisma.user.create({
            data: {
                name: userNames[i]
            }
        });
        users.push(user);
        console.log(`✅ Created user: ${user.name}`);
    }

    // Create Products
    console.log('\n📦 Creating products...');
    const products = [];
    for (let i = 0; i < 100; i++) {
        const productInfo = productData[i];
        const product = await prisma.product.create({
            data: {
                name: productInfo.name,
                unit: productInfo.unit,
                origin: productInfo.origin,
                note: productInfo.note,
                is_active: Math.random() > 0.1 // 90% sản phẩm active
            }
        });
        products.push(product);
        console.log(`✅ Created product: ${product.name}`);
    }

    // Create Orders
    console.log('\n📋 Creating orders...');
    for (let i = 0; i < 20; i++) {
        const randomUser = users[Math.floor(Math.random() * users.length)];
        const randomProduct = products[Math.floor(Math.random() * products.length)];
        const randomQuantity = Math.floor(Math.random() * 10) + 1; // 1-10
        const randomPurpose = orderPurposes[Math.floor(Math.random() * orderPurposes.length)];

        await prisma.order.create({
            data: {
                user_id: randomUser.id,
                product_id: randomProduct.id,
                quantity: randomQuantity,
                purpose: Math.random() > 0.3 ? randomPurpose : null // 70% có purpose
            }
        });
        
        console.log(`✅ Created order: ${randomUser.name} ordered ${randomQuantity} ${randomProduct.unit} of ${randomProduct.name}`);
    }

    console.log('\n🎉 Database seeding completed successfully!');
    console.log(`📊 Summary:`);
    console.log(`   - Users: ${users.length}`);
    console.log(`   - Products: ${products.length}`);
    console.log(`   - Orders: 20`);
}

main()
    .catch((e) => {
        console.error('❌ Error during seeding:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });