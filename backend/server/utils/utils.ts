import NodeID3 from "node-id3";
import path from "path";

// Read all platform songs IDs in file metadata
export async function readPlatformIdsFromFile(filePath: string): Promise<Record<string, string>> {
	const extension = path.extname(filePath).toLowerCase();

	if (extension === ".mp3") {
		const tags = NodeID3.read(filePath);
		const platformIds: Record<string, string> = {};

		if (tags.userDefinedText) {
			tags.userDefinedText.forEach((udt: any) => {
				if (udt.description?.endsWith("_ID")) {
					const platform = udt.description.replace("_ID", "").toLowerCase();
					platformIds[platform] = udt.value;
				}
			});
		}

		return platformIds;
	}

	return {};
}

// Write all platform songs IDs in file metadata
export async function writePlatformIdsToFile(
	filePath: string,
	platformIds: Record<string, string>
): Promise<boolean | Error> {
	const extension = path.extname(filePath).toLowerCase();

	if (extension === ".mp3") {
		const existingTags = NodeID3.read(filePath);
		const userDefinedText = existingTags.userDefinedText || [];
		const filteredUserDefinedText = userDefinedText.filter((udt: any) => !udt.description?.endsWith("_ID"));

		Object.entries(platformIds).forEach(([platform, id]) => {
			if (id) {
				filteredUserDefinedText.push({
					description: `${platform.toUpperCase()}_ID`,
					value: id,
				});
			}
		});

		const newTags = {
			...existingTags,
			userDefinedText: filteredUserDefinedText,
		};

		return NodeID3.write(newTags, filePath);
	}

	return false;
}
