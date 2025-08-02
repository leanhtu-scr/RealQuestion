document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    const questionText = document.getElementById('question-text');
    const mainImage = document.getElementById('main-image');
    const bgMusic = document.getElementById('bg-music');
    const yesMusic = document.getElementById('yes-music');
    const noMusic = document.getElementById('no-music-1');

    // Mảng các câu trả lời khi nhấp "Không"
    const noAnswers = [
        'Bạn chắc chứ?',
        'Thử nghĩ lại nha 😊',
        'Đừng mà, cho tớ hi vọng đi 💖',
        'Thật luôn đó hả?',
        'Tớ buồn đó nha 🥺',
        'Mốt làm bạn trai nha 🥺'
    ];
    let noClickCount = 0;

    // Mảng các hình ảnh khi nhấp "Không"
    const noImages = [
        'https://i.pinimg.com/originals/99/d9/58/99d95822f87e59c2b4e2d3480031855a.gif', 
        'https://i.pinimg.com/originals/3f/76/9f/3f769fa7f4f6b1e6a17b9b4a1b89e7c5.gif',
        'https://i.pinimg.com/originals/0d/f9/57/0df957a1b41b9b4a1b89e7c5.gif'
    ];
    let imageIndex = 0;

    noBtn.addEventListener('click', () => {
        if (noClickCount < noAnswers.length) {
            questionText.textContent = noAnswers[noClickCount];
            
            // Cập nhật ảnh tương ứng
            imageIndex = (imageIndex + 1) % noImages.length;
            mainImage.src = noImages[imageIndex];
            
            noClickCount++;

            // Phát nhạc "không"
            noMusic.play();
        } else {
            // Xử lý khi hết câu trả lời
            questionText.textContent = 'Một lần nữa nha, tớ chỉ muốn nghe "Có" thôi!';
            mainImage.src = 'https://i.pinimg.com/originals/f3/9d/28/f39d282e89a593c660e5a6f3a3c94f5f.gif';
            
            // Tắt nhạc nền và phát nhạc "Không"
            bgMusic.pause();
            noMusic.play();
        }

        // Thêm hiệu ứng di chuyển cho nút "Không"
        noBtn.classList.add(`no-response-${(noClickCount % 2) + 1}`);
        setTimeout(() => {
            noBtn.classList.remove(`no-response-${(noClickCount % 2) + 1}`);
        }, 300);
    });

    yesBtn.addEventListener('click', () => {
        questionText.innerHTML = 'Tớ biết mà! Tớ cũng thích cậu nhiều lắm <span class="heart">❤️</span>';
        mainImage.src = 'https://i.pinimg.com/originals/24/79/11/247911e3b5e43a9d9e60a3406456f9a0.gif';
        
        // Ẩn các nút
        document.getElementById('button-group').style.display = 'none';
        
        // Tạo hiệu ứng trái tim rơi xuống
        createFallingHearts();
        
        // Dừng nhạc nền và phát nhạc đồng ý
        bgMusic.pause();
        yesMusic.play();
    });

    // Tạo hiệu ứng trái tim rơi xuống
    function createFallingHearts() {
        const container = document.body;
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart-fall');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 2 + 3 + 's';
            container.appendChild(heart);
        }
    }
});
