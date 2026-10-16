
/* =========================================
   1. DANH SÁCH NGƯỜI NHẬN VÀ LỜI CHÚC
========================================= */

const danhSachNguoiNhan = {
    C21: {
        ten: "Lê Nguyễn Thanh Xuân",
        loiChuc: "Chúc Thanh Xuân luôn xinh đẹp, vui vẻ, tự tin và gặp thật nhiều điều may mắn. Mong mỗi ngày của bạn đều ngập tràn tiếng cười!"
    },
    C22: {
        ten: "Kim Anh",
        loiChuc: "Chúc Kim Anh luôn rạng rỡ, hạnh phúc và gặp nhiều điều tốt đẹp. Mong bạn luôn giữ được nụ cười thật tươi của mình nhé!"
    },
    C23: {
        ten: "Trâm Anh",
        loiChuc: "Chúc Trâm Anh có một ngày 20/10 thật vui vẻ, nhận được nhiều yêu thương và luôn tỏa sáng theo cách riêng của mình!"
    },
    C24: {
        ten: "Đặng Ngọc Vân Anh",
        loiChuc: "Chúc Vân Anh luôn xinh xắn, học tập thật tốt và có thật nhiều niềm vui. Mong mọi điều dễ thương nhất sẽ đến với bạn!"
    },
    C27: {
        ten: "Nguyễn Trần Như Hạ",
        loiChuc: "Chúc Như Hạ luôn vui vẻ, bình an và tự tin theo đuổi những điều mình yêu thích. Chúc bạn có một ngày 20/10 thật đáng nhớ!"
    },
    C28: {
        ten: "Phạm Thu Hằng",
        loiChuc: "Chúc Thu Hằng luôn xinh đẹp, hạnh phúc, học tốt và gặp nhiều may mắn. Mong bạn lúc nào cũng được yêu thương và trân trọng!"
    },
    C210: {
        ten: "Phạm Nguyễn Uyên Nhi",
        loiChuc: "Chúc Uyên Nhi luôn đáng yêu, vui vẻ và tràn đầy năng lượng tích cực. Mong những dự định của bạn đều thuận lợi và thành công!"
    },
    C212: {
        ten: "Lưu Ly",
        loiChuc: "Chúc Lưu Ly luôn rạng rỡ như ánh nắng, hạnh phúc như những đóa hoa và có thật nhiều kỷ niệm đẹp trong tuổi trẻ!"
    },
    C213: {
        ten: "Nguyễn Bào Hiểu Minh",
        loiChuc: "Chúc Hiểu Minh luôn mạnh mẽ, vui vẻ và tự tin. Mong bạn luôn gặp những người tốt, những điều tốt và có thật nhiều niềm vui!"
    },
    C214: {
        ten: "Ngô Thị Tuyết Nga",
        loiChuc: "Chúc Tuyết Nga có một ngày 20/10 thật ngọt ngào. Mong bạn luôn xinh đẹp, bình an, học tốt và luôn mỉm cười thật nhiều!"
    },
    C215: {
        ten: "Vũ Ánh Ngọc",
        loiChuc: "Chúc Ánh Ngọc luôn tỏa sáng, gặp nhiều may mắn và có những ngày tháng thật đáng nhớ. Mong mọi điều tốt đẹp luôn đồng hành cùng bạn!"
    },
    C216: {
        ten: "Nghiêm Thị Nguyệt Nhi",
        loiChuc: "Chúc Nguyệt Nhi luôn dịu dàng, vui vẻ và hạnh phúc. Mong bạn có đủ tự tin để thực hiện mọi mục tiêu mình đã đặt ra!"
    },
    C217: {
        ten: "Thảo Nhi",
        loiChuc: "Chúc Thảo Nhi luôn xinh tươi, đáng yêu và gặp nhiều điều bất ngờ thú vị. Chúc bạn một ngày 20/10 ngập tràn niềm vui!"
    },
    C218: {
        ten: "Nguyễn Đỗ Triệu Vy",
        loiChuc: "Chúc Triệu Vy luôn tự tin, rạng rỡ và thành công trên con đường mình chọn. Mong những nỗ lực của bạn sẽ được đền đáp xứng đáng!"
    },
    C219: {
        ten: "Tuyết Nhi",
        loiChuc: "Chúc Tuyết Nhi luôn vui vẻ, xinh đẹp và hạnh phúc. Mong mỗi ngày của bạn đều có một lý do thật đáng yêu để mỉm cười!"
    },
    C220: {
        ten: "Đỗ Thị Quỳnh Như",
        loiChuc: "Chúc Quỳnh Như luôn bình an, học tập thuận lợi và có thật nhiều trải nghiệm đẹp. Mong bạn luôn được mọi người yêu quý!"
    },
    C221: {
        ten: "Đinh Thúy Quỳnh",
        loiChuc: "Chúc Thúy Quỳnh luôn xinh đẹp, vui vẻ và tràn đầy sức sống. Mong bạn có một ngày 20/10 thật đặc biệt và đáng nhớ!"
    },
    C222: {
        ten: "Nguyễn Hoàng Phương Thanh",
        loiChuc: "Chúc Phương Thanh luôn tự tin, hạnh phúc và đạt được những điều mình mong muốn. Mong nụ cười luôn ở trên môi bạn!"
    },
    C224: {
        ten: "Vũ Nguyễn Thanh Thảo",
        loiChuc: "Chúc Thanh Thảo luôn vui vẻ, gặp nhiều may mắn và có thật nhiều kỷ niệm đẹp. Mong cuộc sống của bạn luôn ngập tràn yêu thương!"
    },
    C225: {
        ten: "Phương Thảo",
        loiChuc: "Chúc Phương Thảo luôn tươi tắn, đáng yêu và học tập thật tốt. Mong những điều nhỏ bé mỗi ngày cũng khiến bạn hạnh phúc!"
    },
    C226: {
        ten: "Huỳnh Thị Anh Thư",
        loiChuc: "Chúc Anh Thư luôn mạnh mẽ, xinh đẹp và tự tin. Mong bạn luôn được trân trọng, gặp nhiều may mắn và có thật nhiều niềm vui!"
    },
    C227: {
        ten: "Võ Thư",
        loiChuc: "Chúc Võ Thư có một ngày 20/10 thật vui vẻ, nhận được nhiều lời chúc dễ thương và luôn tỏa sáng theo cách của riêng mình!"
    },
    C228: {
        ten: "Nguyễn Phạm Hoài Thương",
        loiChuc: "Chúc Hoài Thương luôn bình an, hạnh phúc và gặp nhiều điều tốt đẹp. Mong những ước mơ của bạn từng bước trở thành hiện thực!"
    },
    C229: {
        ten: "Vũ Ngọc Phương Thùy",
        loiChuc: "Chúc Phương Thùy luôn xinh đẹp, vui vẻ và tràn đầy năng lượng. Mong bạn có thật nhiều cơ hội tốt và những người bạn tuyệt vời!"
    },
    C230: {
        ten: "Nguyễn Thị Bích Thùy",
        loiChuc: "Chúc Bích Thùy luôn rạng rỡ, bình an và thành công. Mong bạn luôn giữ được sự tự tin và niềm vui trong từng ngày!"
    },
    C231: {
        ten: "Nguyễn Xuân Ánh Tiên",
        loiChuc: "Chúc Ánh Tiên luôn tỏa sáng, hạnh phúc và gặp nhiều may mắn. Mong ngày 20/10 của bạn thật ngọt ngào với nhiều bất ngờ dễ thương!"
    },
    C232: {
        ten: "Lê Thị Huyền Trâm",
        loiChuc: "Chúc Huyền Trâm luôn vui vẻ, học tốt và gặp nhiều điều thuận lợi. Mong bạn luôn được yêu thương và có thật nhiều kỷ niệm đẹp!"
    },
    C233: {
        ten: "Trịnh Thị Huế Trân",
        loiChuc: "Chúc Huế Trân luôn xinh đẹp, tự tin và hạnh phúc. Mong mọi cố gắng của bạn đều mang lại kết quả tốt đẹp!"
    },
    C234: {
        ten: "Trần Lê Phương Uyên",
        loiChuc: "Chúc Phương Uyên luôn rạng rỡ, vui vẻ và gặp nhiều may mắn. Mong mỗi ngày đều mang đến cho bạn những niềm vui bất ngờ!"
    },
    C235: {
        ten: "Hồ Trần Thị Nhã Vy",
        loiChuc: "Chúc Nhã Vy luôn hạnh phúc, xinh tươi và tự tin với chính mình. Mong bạn có một ngày 20/10 thật nhiều hoa và lời chúc tốt đẹp!"
    },
    C236: {
        ten: "Như Ý",
        loiChuc: "Chúc Như Ý mọi điều như ý, luôn vui vẻ, bình an và thành công. Mong những điều bạn mong chờ sẽ sớm trở thành hiện thực!"
    },
    C238: {
        ten: "Nguyễn Mỹ Phương",
        loiChuc: "Chúc Mỹ Phương luôn xinh đẹp, vui vẻ và gặp thật nhiều may mắn. Mong bạn luôn giữ được sự lạc quan và nụ cười rạng rỡ!"
    },
    C240: {
        ten: "Đinh Thị Tường Lan",
        loiChuc: "Chúc Tường Lan luôn bình an, hạnh phúc và học tập thuận lợi. Mong bạn có một ngày 20/10 ngập tràn những điều đáng yêu!"
    },
    C242: {
        ten: "Nguyễn Phương Dung",
        loiChuc: "Chúc Phương Dung luôn vui vẻ, tự tin và thành công. Mong mọi ngày của bạn đều có thêm những lý do để mỉm cười!"
    },
    Huit01: {
        ten: "Nguyễn Thuỳ Dung",
        loiChuc: "Chúc Thuỳ Dung luôn xinh đẹp, bình an và gặp nhiều điều may mắn. Mong hành trình học tập của bạn thật thuận lợi và nhiều niềm vui!"
    },
    Huit02: {
        ten: "Bùi Thị Huyền Hoà",
        loiChuc: "Chúc Huyền Hoà luôn hạnh phúc, rạng rỡ và đạt được những điều mình mong muốn. Chúc bạn một ngày 20/10 thật ngọt ngào!"
    }
};


/* =========================================
   2. LẤY THÔNG TIN NGƯỜI NHẬN
========================================= */

const thamSoURL = new URLSearchParams(window.location.search);
const maNguoiNhan = thamSoURL.get("id");

const nguoiNhan = danhSachNguoiNhan[maNguoiNhan] || {
    ten: "Bạn nữ thân mến",
    loiChuc:
        "Chúc bạn luôn xinh đẹp, vui vẻ, bình an và gặp thật nhiều điều tốt đẹp. Mong mỗi ngày của bạn đều ngập tràn tiếng cười!"
};


/* =========================================
   3. TẠO VƯỜN HOA BẰNG CSS
========================================= */

let daTaoVuonHoa = false;

function createFlowerGarden() {
    if (daTaoVuonHoa) return;

    daTaoVuonHoa = true;

    const garden = document.createElement("div");
    garden.className = "flower-garden";
    garden.setAttribute("aria-hidden", "true");

    document.body.appendChild(garden);

    const laTrenDienThoai = window.innerWidth <= 600;

    const flowers = laTrenDienThoai
        ? [
            { x: -8, size: 0.70, delay: 0.1, color: "pink" },
            { x: 12, size: 0.56, delay: 0.6, color: "purple" },
            { x: 78, size: 0.62, delay: 0.3, color: "peach" },
            { x: 96, size: 0.72, delay: 0.8, color: "yellow" }
        ]
        : [
            { x: -3, size: 0.78, delay: 0.1, color: "pink" },
            { x: 11, size: 0.60, delay: 0.5, color: "purple" },
            { x: 25, size: 0.84, delay: 0.3, color: "peach" },
            { x: 76, size: 0.80, delay: 0.7, color: "purple" },
            { x: 90, size: 0.62, delay: 0.2, color: "yellow" },
            { x: 103, size: 0.86, delay: 0.9, color: "pink" }
        ];

    flowers.forEach((item) => {
        const flower = document.createElement("div");
        flower.className = `garden-flower ${item.color}`;

        flower.style.left = `${item.x}%`;
        flower.style.setProperty("--flower-size", item.size);
        flower.style.setProperty("--delay", `${item.delay}s`);

        flower.style.transform = `scale(${item.size})`;
        flower.style.transformOrigin = "bottom center";

        /* Thân hoa */
        const stem = document.createElement("div");
        stem.className = "flower-stem";
        flower.appendChild(stem);

        /* Hai chiếc lá */
        const leafLeft = document.createElement("div");
        leafLeft.className = "flower-leaf left";

        const leafRight = document.createElement("div");
        leafRight.className = "flower-leaf right";

        flower.appendChild(leafLeft);
        flower.appendChild(leafRight);

        /* Đầu hoa */
        const head = document.createElement("div");
        head.className = "flower-head";

        /* Lớp cánh hoa bên ngoài */
        for (let i = 0; i < 12; i++) {
            const petal = document.createElement("div");
            petal.className = "flower-petal";

            const angle = i * 30;

            petal.style.transform = `rotate(${angle}deg)`;
            petal.style.setProperty(
                "--petal-delay",
                `${i * 0.06}s`
            );

            head.appendChild(petal);
        }

        /* Lớp cánh hoa bên trong */
        for (let i = 0; i < 9; i++) {
            const petal = document.createElement("div");
            petal.className = "flower-petal inner";

            const angle = i * 40;

            petal.style.transform = `rotate(${angle}deg)`;
            petal.style.setProperty(
                "--petal-delay",
                `${i * 0.08}s`
            );

            head.appendChild(petal);
        }

        /* Nhụy hoa */
        const center = document.createElement("div");
        center.className = "flower-center";
        head.appendChild(center);

        flower.appendChild(head);

        /* Ánh sáng lấp lánh quanh hoa */
        for (let i = 0; i < 3; i++) {
            const glow = document.createElement("div");
            glow.className = "flower-glow";

            glow.style.left = `${20 + i * 25}%`;
            glow.style.bottom = `${220 + i * 35}px`;

            glow.style.setProperty(
                "--spark-delay",
                `${i * 0.7}s`
            );

            flower.appendChild(glow);
        }

        garden.appendChild(flower);
    });
}


/* =========================================
   4. HIỆU ỨNG HIỆN LỜI CHÚC TỪNG CHỮ
========================================= */

function typeWriter(element, text, speed = 38) {
    if (!element) return;

    element.textContent = "";
    let index = 0;

    function typeNextCharacter() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;

            window.setTimeout(typeNextCharacter, speed);
        }
    }

    typeNextCharacter();
}


/* =========================================
   5. KHỞI TẠO THIỆP
========================================= */

document.addEventListener("DOMContentLoaded", function () {
    /* Tìm các phần tử trên trang */
    const nameElement = document.querySelector(
        "#recipientName, #name, .recipient-name, .name"
    );

    const greetingElement = document.querySelector(
        "#greetingText, #greeting, .greeting-text, .greeting"
    );

    const secretMessage = document.querySelector(
        "#secretMessage, .secret-message"
    );

    const envelope = document.querySelector(
        ".envelope-wrapper, .envelope"
    );

    const openButton = document.querySelector(
        "#openBtn, #openEnvelope, .open-btn, .open-button"
    );

    /* Hiện tên người nhận */
    if (nameElement) {
        nameElement.textContent = nguoiNhan.ten;
    }

    /* Nếu chưa mở thiệp, ẩn lời nhắn bí mật */
    if (secretMessage) {
        secretMessage.classList.remove(
            "show",
            "visible",
            "active"
        );
    }

    let daMoThiep = false;

    function openGreetingCard() {
        if (daMoThiep) return;

        daMoThiep = true;

        /* Mở phong bì */
        if (envelope) {
            envelope.classList.add("open");
        }

        /* Đổi nội dung nút */
        if (openButton) {
            openButton.textContent = "Thiệp dành riêng cho bạn";
            openButton.disabled = true;
        }

        /* Tạo vườn hoa */
        createFlowerGarden();

        /* Hiện lời chúc từng chữ */
        if (greetingElement) {
            window.setTimeout(function () {
                typeWriter(
                    greetingElement,
                    `Chúc mừng ngày Phụ nữ Việt Nam 20/10, ${nguoiNhan.ten}! ${nguoiNhan.loiChuc}`,
                    35
                );
            }, 500);
        }

        /* Hiện lời nhắn bí mật sau khi hoa nở */
        if (secretMessage) {
            window.setTimeout(function () {
                secretMessage.classList.add("show");
            }, 3000);
        }
    }

    /* Bấm nút để mở thiệp */
    if (openButton) {
        openButton.addEventListener("click", openGreetingCard);
    }

    /* Cho phép bấm vào phong bì để mở */
    if (envelope) {
        envelope.addEventListener("click", function (event) {
            if (
                openButton &&
                event.target.closest("button")
            ) {
                return;
            }

            openGreetingCard();
        });
    }
});
