// Packages
import { DateTime }				from "luxon";
import { Model, Field, Table } 	from "@acai/model";

@Table("data_{{ name }}")
export default class {{ name }} extends Model {
	@Field("uuid")
	public id: string;

	@Field()
	public label: string;

	@Field("text")
	public description: string;

	@Field("date")
	public date_created: DateTime;

	@Field("date")
	public date_updated: DateTime;
}