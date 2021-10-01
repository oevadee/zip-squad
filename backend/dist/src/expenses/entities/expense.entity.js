"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expense = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("../../users/user.entity");
let Expense = class Expense {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Expense.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], Expense.prototype, "value", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Expense.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Expense.prototype, "creatorId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Expense.prototype, "receiverId", void 0);
__decorate([
    (0, graphql_1.Field)((type) => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], Expense.prototype, "user", void 0);
Expense = __decorate([
    (0, graphql_1.ObjectType)()
], Expense);
exports.Expense = Expense;
//# sourceMappingURL=expense.entity.js.map