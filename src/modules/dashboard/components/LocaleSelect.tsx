import { languages } from "@/libs/i18n";
import {
  Box,
  FormControl,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export default function LocaleSelect() {
  const { i18n } = useTranslation();
  const handleChange = (e: SelectChangeEvent) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 100 }} size="small">
      <Select
        sx={{
          "&.root": {
            border: "none",
          },
        }}
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={i18n.language}
        onChange={(e) => handleChange(e)}
        renderValue={(selected) => {
          const selectedLanguage = languages.find(
            (lang) => lang.key === selected
          );
          return (
            <Box display="flex" gap={2}>
              <img src={selectedLanguage?.flag} alt="" width={25} />
              <span className="text-base font-normal">
                {selectedLanguage?.name}
              </span>
            </Box>
          );
        }}
      >
        {languages.map((lang) => (
          <MenuItem key={lang.key} value={lang.key}>
            <ListItemIcon sx={{ ml: 2 }}>
              <img src={lang.flag} alt="" width={25} />
            </ListItemIcon>
            <ListItemText>{lang.name}</ListItemText>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
