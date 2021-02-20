// Packages
import { DateTime }						from "luxon";
import { Model, Field, Table, Hasher } 	from "@acai/model";

@Table("link_token")
export default class Token extends Model {
	@Field("uuid")
	public id: string;

	@Field()
	public id_user: string;

	@Field()
	public token: string;

	@Field("date")
	public date_valid: DateTime;
}