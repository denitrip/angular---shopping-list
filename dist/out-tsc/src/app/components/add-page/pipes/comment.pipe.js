import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let CommentPipe = class CommentPipe {
    transform(comment) {
        return comment.length > 5 ? comment.slice(0, 5) : comment;
    }
};
CommentPipe = tslib_1.__decorate([
    Pipe({
        name: 'commentFilter'
    })
], CommentPipe);
export { CommentPipe };
//# sourceMappingURL=comment.pipe.js.map