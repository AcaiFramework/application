// Packages
import { DateTime }						from "luxon";
import { Model, Field, Table, Hasher } 	from "@acai/model";

@Table("data_user")
export default class User extends Model {
	@Field("uuid")
	public id: string;

	@Field()
	public username: string;

	@Field()
	public avatar: string;

	@Field()
	public name: string;

	@Field()
	public email: string;

	@Field("hash")
	public password: Hasher;

	@Field("date")
	public date_created: DateTime;

	@Field("date")
	public date_updated: DateTime;
}