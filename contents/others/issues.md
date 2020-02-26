## Issues

- 変数化 NavLinks.vue - ```href="https://github.com/xxx"```
- 変数化 NavLinks.vue - ```href="https://twitter.com/xxx"```
- 変数化 SnsShare.vue - ```params https://xxx.com${this.$route.path}```
- 変数化 posts/_date/index.vue - ```return this.title + " | xxx"```
- markdown-it cssエラー about.vue - code ```background: #322931;```
- markdown-it cssエラー - table レスポンシブ非対応
- markdown-it htmlエラー - nuxt-link が付かない
- markdown-it htmlエラー - rel="external nofollow noopener" が付かない
- Date管理(created, updated) posts/_date/index.vue - データの取得と表示

## Markdown

### リンク

- [Home](/)
- [GitHub](https://github.co.jp/)

### 見出し

#### H4
##### H5
###### H6

### 罫線

___

---

***

### 強調

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

### 引用

> 吾輩は猫である。
>> 名前はまだ無い。
>>> どこで生れたかとんと見当がつかぬ。
>>>> 何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
>>>>> 吾輩はここで始めて人間というものを見た。

### リスト

+ リスト1
- リスト2
* リスト3
  + リスト1
  - リスト2
  * リスト3
    + リスト1
    - リスト2
    * リスト3

1. リスト1
2. リスト2
3. リスト3

### Code

Inline `Code` Inline

Inline ``Code`` Inline

Inline ```Code``` Inline

```
Sample text here...
```

```python
def hello():
    print 'hello world'
hello()
```

### コードブロック

`Nuxt.js`

``Nuxt.js``

```Nuxt.js```

````Nuxt.js````

### 画像

![エビフライトライアングル](http://i.imgur.com/Jjwsc.jpg "サンプル")

### テーブル

|ヘッダ１|ヘッダ２|ヘッダ３|
|:---|:---:|---:|
|左寄せ|中央揃え|右寄せ|
|LEFT|CENTER|RIGHT|
|・・・・・・・・・・|・・・・・・・・・・|・・・・・・・・・・|
