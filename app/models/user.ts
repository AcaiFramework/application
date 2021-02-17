// Packages
import { Model, Field, Table } from "@acai/model";

@Table("data_user")
export default class User extends Model {
	@Field()
	public id: string;

	@Field()
	public username: string;

	@Field()
	public avatar: string;

	@Field()
	public name: string;

	@Field()
	public email: string;
}