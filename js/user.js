const apiBaseUrl = 'https://swjc-server-swjc-server-app-rqsxkcogym.cn-hangzhou.fcapp.run';
async function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const response = await fetch(`${apiBaseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    if (data.userId) {
        document.getElementById('message').textContent = '登录成功！';
        localStorage.setItem('userId', data.userId);
    } else {
        document.getElementById('message').textContent = '登录失败：' + data.error;
    }
}

async function register(event) {
    event.preventDefault();
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    const response = await fetch(`${apiBaseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    if (data.userId) {
        document.getElementById('message').textContent = '注册成功！';
        localStorage.setItem('userId', data.userId);
    } else {
        document.getElementById('message').textContent = '注册失败：' + data.error;
    }
}

function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const toggleButton = document.querySelector('button');
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        toggleButton.textContent = '切换到注册';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        toggleButton.textContent = '切换到登录';
    }
}

