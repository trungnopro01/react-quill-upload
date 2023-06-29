# Getting Started with Create React App

Đây là demo việc sử dụng editor React-quill: Có chức năng cơ bản chỉnh text và upload ảnh, về phần upload ảnh sẽ ở đây (trong file ```src/components/EditorQuill.tsx```)

```javascript
imageUploader: {
    upload: (file: File) => {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append("upload", file);
          // upload anh len server o day
        });
      }
    }
```

### Cách chạy project:

```sh
yarn install
yarn start
```

Sau đó vào http://localhost:3000