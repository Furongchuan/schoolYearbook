import router from  '@router/admin';

router.init()
/* (() => {
  let targetType = 'login' // 当前显示的类型

  // 用到的dom元素
  let $loginFormBox = $('.login')
  let $loginForm = $('#login-form')
  let $registerFormBox = $('.register')
  let $registerForm = $('#register-form')
  let $changeTypeBtns = $('.btn-change-type')
  let $code = $('.code')

  let $registerInps = {
    username: $('#register-username'),
    password: $('#register-password'),
    nickname: $('#register-nickname')
  }
  let $loginInps = {
    username: $('#login-username'),
    password: $('#login-password'),
    code: $('#login-code')
  }

   // 进行初始化动作
   init()
   function init () { // 初始化函数
    renderTargetForm()
    bindEvents() // 事件绑定
  }

  function bindEvents() {
    // 切换按钮点击切换表单
    $changeTypeBtns.click(function (){
      changeType($(this).data('type'))
    })
    // 注册
    $registerForm.submit(register)
    // 登录
    $loginForm.submit(login)
    // 点击切换验证码
    $code.click(getCode)
  }

  
  function register (e) { // 注册逻辑
    e.preventDefault()
    let username = $registerInps.username.val()
    let password = $registerInps.password.val()
    let nickname = $registerInps.nickname.val()
  
    $.ajax({
        url: '/api/v1/users/register',
        type: 'post',
        data: {
            username,
            password,
            nickname
        }
    }).done(function(res) {
        if ( res.code === 200 ) {
            changeType('login')
        }
    })
  }

  function login (e) { // 登录逻辑
    e.preventDefault()
    let username = $loginInps.username.val()
    let password = $loginInps.password.val()
    let code = $loginInps.code.val()
    
    $.ajax({
        url: '/api/v1/users/login',
        type: 'post',
        data: {
            username,
            password,
            code
        }
    }).done(function(res) {
        if ( res.code === 200 ) {
            window.location.href = '/'
        } else {
            getCode() // 如果登录失败更改验证码
        }
        console.log(res)
    })
  }
  function getCode () { // 验证码
    $.ajax({url: '/api/v1/users/code'})
            .done(res => {
                $code.html(res.img)
                $.cookie('mark', res.mark)
            })
  }
  function changeType (type) { // 切换类型
    targetType = type
    renderTargetForm()
  }

  function renderTargetForm () { // 渲染对应的表单  
    if ( targetType === 'register' ) {
        $loginFormBox.addClass('hidden')
        $registerFormBox.removeClass('hidden')
    } else {
        $loginFormBox.removeClass('hidden')
        $registerFormBox.addClass('hidden')

        getCode() // 获取验证码
    }
  }
})() */