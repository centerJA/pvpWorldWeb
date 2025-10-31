// DOMが完全に読み込まれてから実行
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    // メニュートグル
    menuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        menuToggle.classList.toggle('active');
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // オーバーレイクリックでメニューを閉じる
    overlay.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    // ナビゲーションリンククリック時の処理
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // スムーズスクロール
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
            
            // スマホの場合はメニューを閉じる
            if (window.innerWidth <= 768) {
                menuToggle.classList.remove('active');
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            }
        });
    });
});