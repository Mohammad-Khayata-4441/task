import React, { useState } from "react";
import {
  Box,
  Paper,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  TextField,
  IconButton,
  Divider,
  Badge,
  InputAdornment,
} from "@mui/material";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
  MoreVert as MoreVertIcon,
  Search as SearchIcon,
} from "@mui/icons-material";

// Sample data for conversations
const conversationData = [
  {
    id: 1,
    name: "John Smith",
    message: "When will my order be shipped?",
    timestamp: "10:42 AM",
    unread: 3,
    active: true,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    message: "Thanks for your help!",
    timestamp: "9:20 AM",
    unread: 0,
    active: false,
  },
  {
    id: 3,
    name: "Mike Williams",
    message: "I need a refund for my order",
    timestamp: "Yesterday",
    unread: 1,
    active: false,
  },
  {
    id: 4,
    name: "Emily Davis",
    message: "Is this product in stock?",
    timestamp: "Yesterday",
    unread: 0,
    active: false,
  },
  {
    id: 5,
    name: "Alex Thompson",
    message: "I have a question about my invoice",
    timestamp: "Apr 18",
    unread: 0,
    active: false,
  },
  {
    id: 6,
    name: "Lisa Anderson",
    message: "Can you help me with my account?",
    timestamp: "Apr 17",
    unread: 0,
    active: false,
  },
  {
    id: 7,
    name: "David Wilson",
    message: "When will you restock this item?",
    timestamp: "Apr 16",
    unread: 0,
    active: false,
  },
];

// Sample data for active chat messages
const messageData = [
  {
    id: 1,
    sender: "user",
    message: "Hello, I have a question about my recent order #12345",
    timestamp: "10:30 AM",
  },
  {
    id: 2,
    sender: "admin",
    message:
      "Hi John, I'd be happy to help. What would you like to know about your order?",
    timestamp: "10:32 AM",
  },
  {
    id: 3,
    sender: "user",
    message:
      "I placed it 3 days ago but haven't received any shipping confirmation yet.",
    timestamp: "10:35 AM",
  },
  {
    id: 4,
    sender: "admin",
    message:
      "Let me check that for you. Can you give me a moment while I look up your order details?",
    timestamp: "10:37 AM",
  },
  { id: 5, sender: "user", message: "Sure, thank you!", timestamp: "10:38 AM" },
  {
    id: 6,
    sender: "admin",
    message:
      "I can see that your order is packed and ready to ship. It should go out today, and you'll receive a shipping confirmation email by end of day.",
    timestamp: "10:40 AM",
  },
  {
    id: 7,
    sender: "user",
    message: "That's great! Will it arrive before this weekend?",
    timestamp: "10:42 AM",
  },
];

export default function AdminChatDashboard() {
  const [newMessage, setNewMessage] = useState("");

  const handleMessageChange = (event: any) => {
    setNewMessage(event.target?.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message
      setNewMessage("");
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Box sx={{ flexGrow: 1, height: "calc(100vh - 70px)", bgcolor: "#f5f5f5" }}>
      <Grid container sx={{ height: "100%" }}>
        {/* Conversations Column */}
        <Grid
          item
          xs={12}
          md={4}
          lg={3}
          sx={{ height: "100%", borderRight: "1px solid #e0e0e0" }}
        >
          <Paper
            sx={{
              height: "100%",
              borderRadius: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ p: 2, borderBottom: "1px solid #e0e0e0" }}>
              <Typography variant="h6" fontWeight="bold">
                Conversations
              </Typography>
              <TextField
                size="small"
                placeholder="Search conversations"
                fullWidth
                margin="dense"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <List sx={{ flexGrow: 1, overflow: "auto", pt: 0 }}>
              {conversationData.map((conversation) => (
                <ListItem
                  key={conversation.id}
                  alignItems="flex-start"
                  sx={{
                    py: 1.5,
                    px: 2,
                    borderBottom: "1px solid #f0f0f0",
                    bgcolor: conversation.active ? "#f0f7ff" : "transparent",
                    "&:hover": { bgcolor: "#f5f5f5" },
                    cursor: "pointer",
                  }}
                >
                  <ListItemAvatar>
                    <Badge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      variant="dot"
                      color={conversation.active ? "success" : "default"}
                    >
                      <Avatar
                        alt={conversation.name}
                        src={`/api/placeholder/40/40?text=${conversation.name.charAt(0)}`}
                      />
                    </Badge>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography variant="subtitle2" fontWeight="bold">
                          {conversation.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {conversation.timestamp}
                        </Typography>
                      </Box>
                    }
                    secondary={
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography
                          variant="body2"
                          color="text.primary"
                          noWrap
                          sx={{ maxWidth: "70%" }}
                        >
                          {conversation.message}
                        </Typography>
                        {conversation.unread > 0 && (
                          <Badge
                            badgeContent={conversation.unread}
                            color="primary"
                            sx={{ ml: 1 }}
                          />
                        )}
                      </Box>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Active Chat Column */}
        <Grid
          item
          xs={12}
          md={8}
          lg={9}
          sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <Paper
            sx={{
              height: "100%",
              borderRadius: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Chat Header */}
            <Box
              sx={{
                p: 2,
                borderBottom: "1px solid #e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  sx={{ mr: 2 }}
                  alt="John Smith"
                  src="/api/placeholder/40/40?text=JS"
                />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    John Smith
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Online • Order #12345
                  </Typography>
                </Box>
              </Box>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </Box>

            {/* Messages Area */}
            <Box
              sx={{
                flexGrow: 1,
                overflow: "auto",
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
              }}
            >
              {messageData.map((message) => (
                <Box
                  key={message.id}
                  sx={{
                    display: "flex",
                    justifyContent:
                      message.sender === "admin" ? "flex-end" : "flex-start",
                    mb: 1,
                  }}
                >
                  {message.sender === "user" && (
                    <Avatar
                      sx={{ width: 32, height: 32, mr: 1, mt: 0.5 }}
                      alt="John Smith"
                      src="/api/placeholder/32/32?text=JS"
                    />
                  )}
                  <Box
                    sx={{
                      maxWidth: "70%",
                      bgcolor:
                        message.sender === "admin" ? "#1976d2" : "#e0e0e0",
                      color: message.sender === "admin" ? "white" : "inherit",
                      borderRadius: 2,
                      p: 1.5,
                      position: "relative",
                    }}
                  >
                    <Typography variant="body2">{message.message}</Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        mt: 0.5,
                        textAlign: "right",
                        opacity: 0.7,
                      }}
                    >
                      {message.timestamp}
                    </Typography>
                  </Box>
                  {message.sender === "admin" && (
                    <Avatar
                      sx={{ width: 32, height: 32, ml: 1, mt: 0.5 }}
                      alt="Admin"
                      src="/api/placeholder/32/32?text=A"
                    />
                  )}
                </Box>
              ))}
            </Box>

            {/* Send Document Indicator */}
            <Divider />
            <Box
              sx={{
                p: 1,
                bgcolor: "#f9f9f9",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ ml: 2 }}
              >
                You can send documents, images and other files to the customer
              </Typography>
            </Box>

            {/* Message Input Area */}
            <Box
              sx={{
                p: 2,
                borderTop: "1px solid #e0e0e0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton color="primary" component="label">
                <AttachFileIcon />
                <input type="file" hidden />
              </IconButton>

              <TextField
                fullWidth
                multiline
                maxRows={4}
                placeholder="Type your message here..."
                variant="outlined"
                value={newMessage}
                onChange={handleMessageChange}
                onKeyPress={handleKeyPress}
                sx={{ mx: 1 }}
                size="small"
              />

              <IconButton
                color="primary"
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
              >
                <SendIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
