# NewsApp

## News API가져오기

```
const articles = await axios.get(
      `${article_url}?country=${country_code}&category=${category}&apiKey=${__api_key}`
    );
```

## User정보 저장하기

```
export const getUsers = async () => {
  const res = await axios.get("http://10.0.2.2:4000/user");
  try {
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const createUser = async (userInfo) => {
  try {
    await axios.post("http://10.0.2.2:4000/user", userInfo);
  } catch (error) {
    throw error;
  }
};
```

## 로그인 페이지와 회원가입 페이지

<img src="https://github.com/MSeoJun/NewsApp/blob/master/images/login.png?raw=true">
<br>

### 내용을 입력하지않으면 입력하라는 경고메세지가 뜬다.

<img src="https://github.com/MSeoJun/NewsApp/blob/master/images/register.png?raw=true">

### 회원가입을 하면 정보가 저장된다.

---

## 뉴스관련 페이지

<img src="https://github.com/MSeoJun/NewsApp/blob/master/images/main.png?raw=true">
<br>

### 메인페이지이며 각종 뉴스가 올라온다

<img src="https://github.com/MSeoJun/NewsApp/blob/master/images/detail.png?raw=true">
<br>

### 뉴스를 하나 클릭하면 더 자세한 페이지가 나온다.

<img src="https://github.com/MSeoJun/NewsApp/blob/master/images/share.png?raw=true">

### 뉴스를 또한 공유할 수도 있다
