var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    TakePhoto.prototype.getGeneralInfo = function () {
        return "Camera Mode: ".concat(this.cameraMode, ", Filter: ").concat(this.filter);
    };
    return TakePhoto;
}());
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(cameraMode, filter, burst) {
        if (burst === void 0) { burst = 1; }
        var _this = _super.call(this, cameraMode, filter) || this;
        _this.burst = burst;
        return _this;
    }
    Instagram.prototype.getPhotoDetails = function () {
        return "Camera Mode: ".concat(this.cameraMode, ", Filter: ").concat(this.filter, ", Burst: ").concat(this.burst);
    };
    return Instagram;
}(TakePhoto));
var insta = new Instagram("Portrait", "Sepia");
insta.getPhotoDetails();
