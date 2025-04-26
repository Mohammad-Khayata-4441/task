import { HiTrendingUp } from "react-icons/hi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid2 as Grid,
  alpha,
  Button,
} from "@mui/material";
import {
  People as PeopleIcon,
  ShoppingBag as ShoppingBagIcon,
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
} from "@mui/icons-material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {
  countriesByPoints,
  countriesByRequests,
  countriesByUsers,
  productReport,
} from "./data";

// Define types
interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  iconColor: string;
}

interface CountryData {
  name: string;
  value: number;
  color: string;
}

interface RankingProps {
  title: string;
  subtitle: string;
  countries: CountryData[];
  showPieChart: boolean;
  rate: string;
}

// StatCard Component
const StatCard: React.FC<StatCardProps> = ({
  value,
  subtitle,
  icon,
  iconColor,
}) => {
  return (
    <Card sx={{ height: "100%", display: "flex", py: 0 }}>
      <Box sx={{ display: "flex", py: 1, px: 2 }}>
        <Box
          sx={{
            backgroundColor: alpha(iconColor, 0.2),
            color: iconColor,
            borderRadius: "10px",
            width: 32,
            height: 32,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginInlineEnd: "10px",
          }}
        >
          {icon}
        </Box>
        <Box>
          <Typography
            variant="h6"
            color={iconColor}
            component="div"
            fontWeight="600"
          >
            {value}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

// CountryRanking Component
const CountryRanking: React.FC<RankingProps> = ({ title, countries, rate }) => {
  // Data for pie chart
  const data = countries.map((country) => ({
    name: country.name,
    value: country.value,
  }));

  // Calculate total for percentage
  // const total = countries.reduce((sum, country) => sum + country.value, 0);

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
            mb={2}
          >
            <Typography textAlign={"center"} variant="h6" component="div">
              {title}
            </Typography>
            <Box display="flex" alignItems="center">
              <Typography
                variant="caption"
                color="success"
                sx={{ marginInlineEnd: 1 }}
              >
                <HiTrendingUp />+{rate}
              </Typography>
              <Box
                sx={{
                  borderRadius: 1,
                  backgroundColor: (t) => alpha(t.palette.primary.main, 0.1),
                  py: 0.2,
                  color: (t) => t.palette.primary.main,
                  px: 1,
                }}
                color="primary"
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                  variant="caption"
                >
                  آخر أسبوع
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Button
              endIcon={<AiOutlineArrowLeft size={14} />}
              size="small"
              variant="text"
            >
              عرض الكل
            </Button>
          </Box>
        </Box>
        <Grid container spacing={1.5}>
          <Grid size={12}>
            <Box height={160}>
              <ResponsiveContainer width={200}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={80}
                    paddingAngle={0}
                    dataKey="value"
                  >
                    {countries.map((country, index) => (
                      <Cell key={`cell-${index}`} fill={country.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Grid>
          {countries.map((country, index) => (
            <Grid size={4}>
              <Box display="flex">
                <Box
                  sx={{
                    mt: 1,
                    marginRight: 0.5,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: country.color,
                  }}
                />
                <Box key={index}>
                  <Typography variant="caption">{country.name}</Typography>
                  <Typography variant="subtitle1" fontWeight={"600"}>
                    {country.value.toLocaleString()}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

// Main Dashboard Component
const Dashboard: React.FC = () => {
  // Fake data
  const statsData = [
    {
      title: "عدد المستخدمين",
      value: "86,931",
      subtitle: "عدد المستخدمين",
      icon: <PeopleIcon style={{ fontSize: "1.2rem" }} />,
      iconColor: "#3bafda",
    },
    {
      title: "عدد الطلبات",
      value: "610,538,451",
      subtitle: "عدد الطلبات",
      icon: <ShoppingBagIcon style={{ fontSize: "1.2rem" }} />,
      iconColor: "#e36eec",
    },
    {
      title: "إجمالي الطلبات",
      value: "41,145",
      subtitle: "إجمالي الطلبات",
      icon: <CheckCircleIcon style={{ fontSize: "1.2rem" }} />,
      iconColor: "#38d57a",
    },
    {
      title: "طلبات قيد المعالجة",
      value: "6",
      subtitle: "طلبات قيد المعالجة",
      icon: <ErrorIcon style={{ fontSize: "1.2rem" }} />,
      iconColor: "#3bafda",
    },
    {
      title: "طلبات معلقة",
      value: "2,851",
      subtitle: "طلبات معلقة",
      icon: <ErrorIcon style={{ fontSize: "1.2rem" }} />,
      iconColor: "#ffaa00",
    },
    {
      title: "طلبات منفذة",
      value: "36,706",
      subtitle: "طلبات منفذة",
      icon: <CheckCircleIcon style={{ fontSize: "1.2rem" }} />,
      iconColor: "#38d57a",
    },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={1}>
        {/* Stats Cards */}
        {statsData.map((stat, index) => (
          <Grid size={4} key={index}>
            <StatCard {...stat} />
          </Grid>
        ))}

        {/* Country Rankings */}
        <Grid size={6}>
          <CountryRanking
            title="أعلى 10 بلدان حسب النقاط"
            subtitle="قائمة البلدان حسب النقاط"
            countries={countriesByPoints}
            showPieChart={true}
            rate="970"
          />
        </Grid>

        <Grid size={6}>
          <CountryRanking
            title="أعلى 10 بلدان حسب الطلبات"
            subtitle="قائمة البلدان حسب الطلبات"
            countries={countriesByRequests}
            showPieChart={true}
            rate="970"
          />
        </Grid>

        <Grid size={6}>
          <CountryRanking
            title="تقرير المنتجات"
            subtitle="قائمة المنتجات الأكثر مبيعاً"
            countries={productReport}
            showPieChart={true}
            rate="970"
          />
        </Grid>

        <Grid size={6}>
          <CountryRanking
            title="اعلى 10 دول حسب المستخدمين"
            subtitle="قائمة الدول حسب عدد المستخدمين"
            countries={countriesByUsers}
            showPieChart={true}
            rate="970"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
