// Packages
import { DateTime }							from "luxon";
import { Model, Field, Table, Relation } 	from "@acai/model";

// Models
import User from "./user";

@Table("link_token")
export default class Token extends Model {
	@Field("uuid")
	public id: string;

	@Field()
	public token: string;

	@Field("date")
	public date_valid: DateTime;

	// -------------------------------------------------
	// relations
	// -------------------------------------------------

	@Field.belongsTo(() => User, "id_user")
	public user: Relation<User, "belongsTo">;
}