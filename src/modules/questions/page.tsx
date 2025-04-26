// QuizManagementUI.tsx
import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  TextField,
  Tabs,
  Tab,
  CardContent,
  Card,
  Pagination,
} from "@mui/material";
import { DataGrid, GridColDef, GridSortModel } from "@mui/x-data-grid";
import {
  Add as AddIcon,
  CloudUpload as CloudUploadIcon,
  EditOutlined,
  DeleteOutlineTwoTone,
  FilterList,
} from "@mui/icons-material";
import { FiSearch } from "react-icons/fi";

// Define the structure of a question item
interface QuestionItem {
  id: number;
  question: string;
  correctAnswer: string;
  answer1: string;
  answer2: string;
  answer3: string;
  language: string;
  category: string;
  difficulty: number;
  date: string;
  status: string;
}

// Define the structure of a category item
interface CategoryItem {
  id: number;
  name: string;
  description: string;
  questionCount: number;
  createdAt: string;
  status: string;
}

// Define the structure of a subcategory item
interface SubCategoryItem {
  id: number;
  name: string;
  parentCategory: string;
  description: string;
  questionCount: number;
  createdAt: string;
  status: string;
}

// Generate fake questions data
const generateQuestionsData = (): QuestionItem[] => {
  const questions = [
    "Name the Egyptian goddess that had a woman's body with the head of a lion",
    "The most intelligent breed of dog is which of these",
    "A mixed breed dog is also sometimes termed what",
    "Singapore cats have an average weight of what",
    "Pedigree dogs must be registered with which organization",
    "There are approximately how many dogs in the world",
    "The oldest breed of dog is which of these",
    "Laika the dog was sent into space in which year",
    "Which country first introduced guide dogs to help visually impaired people",
  ];

  return questions.map((q, index) => {
    const options = [
      ["Helen", "Troy", "Juno"],
      ["Miniature Dachshund", "Puli", "Golden Retriever"],
      ["Half and Half", "Mixed Up", "Grey"],
      ["kg 1.5", "kg 7.7", "kg 7.2"],
      ["Canine Club", "Crufts", "Puppy World"],
      ["billion 1", "million 1", "million 250"],
      ["Border Collie", "Miniature Dachshund", "Golden Retriever"],
      ["1966", "1989", "1970"],
      ["France", "Scotland", "Peru"],
    ];

    return {
      id: index + 1,
      question: q,
      answer1: options[index][0],
      answer2: options[index][1],
      answer3: options[index][2],
      correctAnswer: "الخيار الرابع",
      language: "en",
      category: "Animals",
      difficulty: 3,
      date: "2024/08/07",
      status: "Active",
    };
  });
};

// Generate fake categories data
const generateCategoriesData = (): CategoryItem[] => {
  const categories = [
    "Animals",
    "History",
    "Geography",
    "Science",
    "Literature",
    "Movies",
    "Sports",
    "Music",
    "Art",
  ];

  return categories.map((category, index) => {
    return {
      id: index + 1,
      name: category,
      description: `Questions about ${category.toLowerCase()}`,
      questionCount: Math.floor(Math.random() * 100) + 10,
      createdAt: "2024/08/07",
      status: Math.random() > 0.3 ? "Active" : "Inactive",
    };
  });
};

// Generate fake subcategories data
const generateSubCategoriesData = (): SubCategoryItem[] => {
  const subcategories = [
    { name: "Mammals", parent: "Animals" },
    { name: "Birds", parent: "Animals" },
    { name: "Reptiles", parent: "Animals" },
    { name: "World War II", parent: "History" },
    { name: "Ancient Egypt", parent: "History" },
    { name: "European Capitals", parent: "Geography" },
    { name: "Mountains", parent: "Geography" },
    { name: "Physics", parent: "Science" },
    { name: "Chemistry", parent: "Science" },
  ];

  return subcategories.map((subcat, index) => {
    return {
      id: index + 1,
      name: subcat.name,
      parentCategory: subcat.parent,
      description: `Questions about ${subcat.name.toLowerCase()}`,
      questionCount: Math.floor(Math.random() * 50) + 5,
      createdAt: "2024/08/07",
      status: Math.random() > 0.3 ? "Active" : "Inactive",
    };
  });
};

const QuizManagementUI: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [questionsData] = useState<QuestionItem[]>(generateQuestionsData());
  const [categoriesData] = useState<CategoryItem[]>(generateCategoriesData());
  const [subCategoriesData] = useState<SubCategoryItem[]>(
    generateSubCategoriesData()
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [sortModel, setSortModel] = useState<GridSortModel>([]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Question columns definition
  const questionColumns: GridColDef[] = [
    {
      field: "language",
      headerName: "اللغة",
      sortable: true,
      width: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "question",
      headerName: "السؤال",
      sortable: true,
      flex: 1,
      align: "left",
      headerAlign: "center",
      renderCell: (params) => (
        <div
          style={{
            maxWidth: "100%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {params.value}
        </div>
      ),
    },
    {
      field: "answer1",
      headerName: "الخيار الأول",
      sortable: true,
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "answer2",
      headerName: "الخيار الثاني",
      sortable: true,
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "answer3",
      headerName: "الخيار الثالث",
      sortable: true,
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "correctAnswer",
      headerName: "الجواب",
      sortable: true,
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "category",
      headerName: "النشاط",
      sortable: true,
      width: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "date",
      headerName: "تاريخ الإنشاء",
      sortable: true,
      width: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "actions",
      headerName: "أوامر",
      sortable: false,
      width: 120,
      align: "center",
      headerAlign: "center",
      renderCell: () => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",

            height: "100%",
            alignItems: "center",
          }}
        >
          <IconButton size="small">
            <EditOutlined fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <DeleteOutlineTwoTone fontSize="small" />
          </IconButton>
        </Box>
      ),
    },
  ];

  // Category columns definition
  const categoryColumns: GridColDef[] = [
    {
      field: "name",
      headerName: "اسم التصنيف",
      sortable: true,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "description",
      headerName: "الوصف",
      sortable: true,
      flex: 2,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "questionCount",
      headerName: "عدد الأسئلة",
      sortable: true,
      width: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "createdAt",
      headerName: "تاريخ الإنشاء",
      sortable: true,
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "status",
      headerName: "الحالة",
      sortable: true,
      width: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "actions",
      headerName: "أوامر",
      sortable: false,
      width: 120,
      align: "center",
      headerAlign: "center",
      renderCell: () => (
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton size="small">
            <EditOutlined fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <DeleteOutlineTwoTone fontSize="small" />
          </IconButton>
        </Box>
      ),
    },
  ];

  // Subcategory columns definition
  const subcategoryColumns: GridColDef[] = [
    {
      field: "name",
      headerName: "اسم التصنيف الفرعي",
      sortable: true,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "parentCategory",
      headerName: "التصنيف الرئيسي",
      sortable: true,
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "description",
      headerName: "الوصف",
      sortable: true,
      flex: 2,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "questionCount",
      headerName: "عدد الأسئلة",
      sortable: true,
      width: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "createdAt",
      headerName: "تاريخ الإنشاء",
      sortable: true,
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "status",
      headerName: "الحالة",
      sortable: true,
      width: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "actions",
      headerName: "أوامر",
      sortable: false,
      width: 120,
      align: "center",
      headerAlign: "center",
      renderCell: () => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",

            height: "100%",
            alignItems: "center",
          }}
        >
          <IconButton size="small">
            <EditOutlined fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <DeleteOutlineTwoTone fontSize="small" />
          </IconButton>
        </Box>
      ),
    },
  ];

  // Filter data based on search query and active tab
  const getFilteredData = () => {
    if (tabValue === 0) {
      return questionsData.filter((item) =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (tabValue === 1) {
      return categoriesData.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      return subCategoriesData.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.parentCategory.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  };

  const getActiveColumns = () => {
    if (tabValue === 0) return questionColumns;
    if (tabValue === 1) return categoryColumns;
    return subcategoryColumns;
  };

  const getActiveButtonText = () => {
    if (tabValue === 0) return "اضافة سؤال";
    if (tabValue === 1) return "اضافة تصنيف";
    return "اضافة تصنيف فرعي";
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Header */}
      <Card>
        <CardContent>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              justifyContent: "space-between",
              p: 2,
            }}
          >
            <Typography variant="h6" component="div">
              أسئلة / قائمة أسئلة
            </Typography>
          </Box>

          {/* Tabs */}
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="أسئلة" />
              <Tab label="التصنيفات" />
              <Tab label="التصنيفات الفرعية" />
            </Tabs>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ mt: 1 }}>
        <CardContent>
          {/* Search and Add Controls */}
          <Box
            sx={{
              padding: 0,
              mb: 2,
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={"بحث"}
                size="small"
                InputProps={{
                  startAdornment: <FiSearch style={{ marginLeft: "5px" }} />,
                }}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="outlined"
                startIcon={<CloudUploadIcon />}
                color="primary"
                sx={{
                  border: "none",

                  borderRadius: "5px",
                  height: "40px",
                  bgcolor: "#e8f5e9",
                  color: "#2e7d32",
                  "&:hover": {
                    bgcolor: "#c8e6c9",
                  },
                }}
              >
                استيراد ملف إكسل
              </Button>
              <IconButton
                sx={{
                  backgroundColor: "#eeeeee",
                }}
              >
                <FilterList />
              </IconButton>
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                sx={{
                  border: "none",
                  backgroundColor: "#eeeeee",
                  height: "40px",
                  color: (t) => t.palette.text.primary,
                }}
              >
                {getActiveButtonText()}
              </Button>
            </Box>
          </Box>
          {/* Pagination */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="body2">
              عرض {(1 - 1) * 10 + 1} -{" "}
              {Math.min(1 * 10, getFilteredData().length)} من أصل{" "}
              {getFilteredData().length} سجل
            </Typography>
            <Pagination count={5} page={1} color="primary" />
          </Box>
          {/* DataGrid */}
          <Box sx={{ width: "100%" }}>
            <DataGrid
              slots={{
                pagination: null,
              }}
              rows={getFilteredData()}
              columns={getActiveColumns()}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[5, 10, 25]}
              sortModel={sortModel}
              onSortModelChange={(model) => setSortModel(model)}
              checkboxSelection={false}
              disableRowSelectionOnClick
              disableColumnFilter
              localeText={{
                noRowsLabel: "لا توجد بيانات",
                footerRowSelected: (count) => `تم تحديد ${count} صفوف`,
                footerTotalRows: "إجمالي الصفوف:",
                footerTotalVisibleRows: (visibleCount, totalCount) =>
                  `${visibleCount.toLocaleString()} من ${totalCount.toLocaleString()}`,
              }}
              sx={{
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: "#eeeeee",
                  color: "#333",
                  fontWeight: "bold",
                },
                "& .MuiDataGrid-cell:focus": {
                  outline: "none",
                },
                "& .MuiDataGrid-cell:focus-within": {
                  outline: "none",
                },
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default QuizManagementUI;
