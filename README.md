# Custom Pet Tags

## 环境
* 系统：Mac 10.11.4 (15E65)
* nodeJS: v8.9.3
* npm: 5.6.0
* angular: 5.1.2
* angular/cli: 1.6.1 
* ngrx: 4.1.1 

## 是什么？
> 参照https://auth0.com/blog/managing-state-in-angular-with-ngrx-store/ 一步一步尝试ngrx使用的示例，因为版本原因，解决了以下几个问题。

## 解决问题
### 启用ngrx，需要在app.module imports中增加StoreModule.provideStore({ petTag: petTagReducer })
> 因为版本原因，导致这一句报错提示StoreModule中不存在provideStore，需要修改为：StoreModule.forRoot({ petTag: petTagReducer })

### Property 'payload' does not exist on type 'Actions'.
> https://github.com/ngrx/platform/issues/31
> 大体意思貌似是，Action接口中删除了payload属性

### Can't bind to 'ngModel' since it isn't a known property of 'input'.
> https://stackoverflow.com/questions/38892771/cant-bind-to-ngmodel-since-it-isnt-a-known-property-of-input
> 需要导入FormsModule，可能是angular版本原因

### Chrome ngrx调试时，需要在app.module imports中增加StoreDevtoolsModule.instrumentOnlyWithExtension()
> 这一句有点过时，会报错，提示说StoreDevtoolsModule中没有instrumentOnlyWithExtension()，需要修改为：StoreDevtoolsModule.instrument({ maxAge: 50 })

### ERROR in src/app/app.module.ts(5,30): error TS2307: Cannot find module './app.component'.
src/app/pages/complete/complete.component.ts(18,35): error TS2345: Argument of type '"petTag"' is not assignable to parameter of type '"font" | "text" | "complete" | "shape" | "clip" | "gems"'.
src/app/pages/create/create.component.ts(19,35): error TS2345: Argument of type '"petTag"' is not assignable to parameter of type '"font" | "text" | "complete" | "shape" | "clip" | "gems"'.
> store.select('petTag') 这一句仍然报上述错误，尚未解决。

### 如何mac终端中启动vscode打开文件
> https://q.cnblogs.com/q/DetailPage/100818/

## Chrome调试截图
![image](https://github.com/ewangteng/pet-tags-ngrx/blob/origin/master/screenshots/1.pic_hd.jpg)
