import publicCloud from "../assets/images/public-cloud.png";
import vpc from "../assets/images/vpc.png";
import privateCloud from '../assets/images/private-cloud.png';
import dedicatedServer from '../assets/images/dedicated-server.png';
import colocation from '../assets/images/colocation.png';
import solutions from '../assets/images/solitions-server.png';
import logo from '../assets/images/logo.png';
import solution from '../assets/images/solution-business.svg';
import easyScreen from '../assets/images/easy-screen.png';
import costSave from '../assets/images/cost-save.png';
import slide1 from '../assets/images/slide1.jpg';
import network from '../assets/images/network.svg';

import message from '../assets/images/message.png';
import message3 from '../assets/images/message3.png';
import sendMail from '../assets/images/mail.png';

const content = {
    internal: {
        ads: `This line is for the event that you want to add to the web side`,
        logo: logo,
        trial: {
            title: "Trải nghiệm dịch vụ ngay hôm nay",
            content: `Dùng thử dịch vụ miễn phí trong 3 ngày để thử nghiệm nền tảng cho
            sản phẩm, ứng dụng của bạn`,
            img: network
        },
        support: {
            title: "Bạn cần hỗ trợ thêm",
            content: "Liên hệ với đội ngũ hỗ trợ 24/7 của chúng tôi",
            items: [
                {
                    title: "Gửi mail",
                    content: `Bạn cần thêm thông tin?
                        Gửi ngay email, chúng tôi sẽ có câu trả lời.`,
                    img: sendMail
                },
                {
                    title: "Gửi Ticket",
                    content: `Kênh tiếp nhận yêu cầu hỗ trợ dịch vụ dành cho khách hàng của CloundFly.`,
                    img: message
                },
                {
                    title: "Live Chat",
                    content: "Bạn có câu hỏi? Hãy chat ngay với nhân viên tư vấn để được giải đáp.",
                    img: message3
                }
            ]
        },
        footer: {
            via: "Power by iNET",
            options: [
                {
                    title: "Sản phẩm",
                    items: [
                        {title: "Cloud Server", href: "/cloud-server"},
                        {title: "Virtual Private Cloud", href: "/virtual-private-cloud"},
                        {title: "Private Cloud", href: "/private-cloud"},
                        {title: "Colocation", href: "/cho-thue-cho-dat-may-chu"},
                        {title: "Dedicated Server", href: "/cho-thue-may-chu"},
                        {title: "Giải pháp", href: "/giai-phap"},
                        {title: "Cloud Storage", href: "/cloud-storage"},
                        {title: "Container", href: "/container"},
                        {title: "Tích hợp hệ thống", href: "/tich-hop-he-thong"},
                        {title: "cPanel", href: "/cpanel"},
                        {title: "DirectAdmin", href: "/directadmin"}
                    ]
                },
                {
                    title: "Công ty",
                    items: [
                        {title: "Giới thiệu", href: "/gioi-thieu"},
                        {title: "Tuyển dụng", href: "/tuyen-dung"},
                        {title: "Khách hàng", href: "/khach-hang"},
                        {title: "Chính sách bảo mật", href: "/chinh-sach-bao-mat"},
                        {title: "Quy định sử dụng", href: "/quy-dinh-su-dung"},
                        {title: "Cam kết dịch vụ", href: "/cam-ket-dich-vu"},
                        {title: "Khuyến mãi", href: "/khuyen-mai"}
                    ]
                },
                {
                    title: "Hỗ trợ",
                    items: [
                        {title: "Hướng dẫn thanh toán", href: "#"},
                        {title: "Hướng dẫn sử dụng", href: "/docs"},
                        {title: "Tài liệu kỹ thuật", href: "/techblog"},
                        {title: "Liên hệ", href: "/lien-he"}
                    ]
                },
                {
                    title: "Theo dõi chúng tôi",
                    items: [
                        {title: "Facebook", href: "https://www.facebook.com/cloudfly.vn", icon: "fab fa-facebook-f"},
                        {title: "LinkedIn", href: "#", icon: "fab fa-linkedin-in"},
                        {title: "Youtube", href: "#" ,icon: "fab fa-youtube"},
                        {title: "Twitter", href: "#", icon: "fab fa-twitter"}
                    ]
                },
            ],
            address: [
                {
                    title: "Hà Nội",
                    items: [ 
                        {title: "Toà nhà iNET, 247 Cầu Giấy, phường Dịch Vọng, Quận Cầu Giấy", icon: "fa fa-map-marker"},
                        {title: "Email: contact@CloudFly.vn", icon: "fa fa-envelope"},
                        {title: "Hotline: 0904 558 448", icon: "fa fa-phone-square"}
                    ]
                },
                {
                    title: "Thành Phố Hồ Chí Minh",
                    items: [
                        {title: "Tòa nhà Arrow, 40 Hoàng Việt, Phường 4, Quận Tân Bình", icon: "fa fa-map-marker"},
                        {title: "Email: contact@CloudFly.vn", icon: "fa fa-envelope"},
                        {title: "Hotline: 0904 558 448", icon: "fa fa-phone-square"}
                    ]
                },
                {
                    title: "Đà Nẵng",
                    items: [
                        {title: "Tòa nhà S-HOME, 56 Nguyễn Tri Phương, Phường Chính Gián, Quận Thanh Khê", icon: "fa fa-map-marker"},
                        {title: "Email: contact@CloudFly.vn", icon: "fa fa-envelope"},
                        {title: "Hotline: 0904 558 448", icon: "fa fa-phone-square"}
                    ]
                }
            ],
            copyright: [
                "© Copyright 2021 CloudFly. Công Ty Cổ Phần CloudFly",
                "Số 56 Nguyễn Tri Phương, P. Chính Gián, Q. Thanh Khê, TP. Đà Nẵng. Đại Diện: Ông Lưu Văn Vương",
                "Mã số thuế 0402035884 cấp tại Phòng đăng ký kinh doanh Sở Kế hoạch và Đầu tư Thành phố Đà Nẵng"
            ]

        },
        testimonials: {
            title: "Khách hàng nói gì về chúng tôi",
            items: [
                {
                    active: true,
                    content: `Ut elementum a elit sed tristique. Pellentesque sed semper
                        erat. Orci varius natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Aenean quam erat, rutrum ut
                        malesuada.`,
                    from: "William Smith",
                    position: "New Co-Founder",
                    slide: 0
                },
                {
                    content: `Quisque lacinia sed velit et maximus. Quisque dictum, lacus a
                    malesuada finibus, arcu magna luctus risus, eu accumsan risus
                    elit vitae lacus.`,
                    from: "Vinny Smart",
                    position: "Digital Marketer",
                    slide: 1
                },
                {
                    content: `Vestibulum mauris ipsum, tempor tincidunt justo sit amet,
                    bibendum tincidunt dui. Aenean molestie, odio quis viverra
                    ultricies, leo tellus lacinia neque, sit amet maximus tortor
                    nunc aliquet felis.`,
                    from: "Trevor Liam",
                    position: "Technology Chef",
                    slide: 2
                }
            ]
        },
        carouselIntroduce: {
            items: [
                {
                    img: slide1,
                    description:"The description for slide 1",
                    subLine: "...",
                    active: true,
                    slide: 0
                },
                {
                    img: slide1,
                    description:"The description for slide 2",
                    subLine: "...",
                    slide: 1
                },
                {
                    img: slide1,
                    description:"The description for slide 3",
                    subLine: "...",
                    slide: 2
                }
            ]
        }
    },
    
    homePage: {
        products: {
            title: "Dịch vụ của chúng tôi",
            description: `Lựa chọn hàng đầu cho kỷ nguyên chuyển 
                đổi số với hạ tầng điện toán đám mây hiệu năng cao. 
                Bạn chỉ việc chuyên tâm vào phát triển ứng dụng và sản
                phẩm tuyệt vời của mình, mọi thứ còn lại hãy để chúng tôi giúp bạn.`,
            items: [
                {
                    img: publicCloud,
                    title: "Cloud Server",
                    content: "Khởi tạo Cloud Server nhanh chóng trên hạ tầng điện toán đám mây sử dụng 100% SSD"
                },
                {
                    img: vpc,
                    title: "Virtual Private Cloud",
                    content: "Bảo mật tài nguyên đám mây của bạn với các kết nối nội bộ trong hạ tầng Cloud Server"
                },
                {
                    img: privateCloud,
                    title: "Private Cloud",
                    content: "Giải pháp xây dựng hạ tầng điện toán đám mây cho doanh nghiệp trên nền tảng OpenStack"
                },
                {
                    img: dedicatedServer,
                    title: "Dedicated Server",
                    content: "Máy chủ vật lý chuyên dụng với cấu hình mạnh mẽ trên các trung tâm dữ liệu đạt chuẩn quốc tế"
                },
                {
                    img: colocation,
                    title: "Colocation",
                    content: " Cho thuê chỗ đặt máy chủ tại các trung tâm dữ liệu đạt chuẩn quốc tế Tier 3"
                },
                {
                    img: solutions,
                    title: "Solutions",
                    content: "Tư vấn và triển khai các giải pháp tích hợp hệ thống, điện toán đám mây cho doanh nghiệp"
                }
            ],
        },
        benefit: {
            block1: {
                title: "Hạ tầng đáp ứng cho mọi doanh nghiệp",
                img: solution,
                items: [
                    {
                        title: "Khẳng định thương hiệu", 
                        content: `Tạo mối quan hệ lâu dài và tin tưởng nhất định vào một hệ thống hoạt động ổn đinh. 
                            Từ đó có thể đáp ứng tối đa yêu cầu của khách hàng.`
                    },
                    {
                        title: "Phát triển sản phẩm hiệu quả",
                        content: `Tiết kiệm thời gian và nguồn lực trong việc xây dựng cơ sở hạ tầng. 
                            Từ đó tập trung hơn cho việc phát triển ứng dụng, cải tiến sản phẩm.`
                    },
                    {
                        title: "Triển khai và mở rộng nhanh chóng",
                        content: `Khởi tạo môi trường ngay tức thì với tập ứng dụng đóng gói sẵn và
                            mở rộng nhanh chóng chỉ với vài cú click chuột giúp tiết kiệm tối đa chi phí thời gian.`
                    }
                ]
            },
            block2: {
                title: "Giao diện quản lý mạnh mẽ, trực quan",
                description: `Quản trị đơn giản, khởi tạo nhanh chóng cùng với thư viện hệ điều hành, 
                    ứng dụng phóng phú. Hỗ trợ nhiều tính năng, tiện ích quản lý đa dạng và hơn thế nữa.`,
                    img: easyScreen,
                items: [
                    '99.9% Uptime SLA', 
                    'IPv6 Support', 
                    'DNS management', 
                    'Local Network', 
                    'Backup', 
                    'Snapshot', 
                    'Firewall', 
                    'Metric Monitoring'
                ]
            },
            block3: {
                title: "Sự lựa chọn hàng đầu về hiệu quả chi phí",
                img: costSave,
                items: [
                    {
                        title: "Thiết kế tối ưu", 
                        content: `Các gói được dịch vụ được nghiên cứu và thiết kế tối ưu
                            với nhiều cấp độ tài nguyên nhằm phục vụ cho mọi nhu cầu của khách hàng.`
                    },
                    {
                        title: "Chi trả theo giờ",
                        content: `Hệ thống xử lý thanh toán thông minh hằng giờ, hằng ngày, hằng tháng. 
                            Bạn chỉ chi trả cho những gì sử dụng và chi phí có thể dự đoán được.`
                    },
                    {
                        title: "Giá thành cạnh tranh",
                        content: `Bảng giá dịch vụ cạnh tranh, phù hợp với mọi nhu cầu khách hàng.
                            Hạ tầng được đầu tư và ứng dụng nhiều công nghệ hiện đại mang lại chất lượng vượt trội.`
                    }
                ]
            },
        }
    }
}

export default content;