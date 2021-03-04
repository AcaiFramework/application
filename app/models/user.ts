// Packages
import { DateTime }									from "luxon";
import { Model, Field, Table, Hasher, Relation } 	from "@acai/model";

// Models
import Token from "./token";

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

	// -------------------------------------------------
	// relations
	// -------------------------------------------------

	@Field.hasOne(() => Token, "id_user")
	public token: Relation<Token, "hasOne">;
}