from django.db import models

OPERATION_CHOICES = (
    ("INCOME", "Доход"),
    ("EXPENSES", "Расход")
)


class Note(models.Model):
    category = models.ForeignKey('Category',
                                 on_delete=models.SET_NULL,
                                 null=True)
    body = models.TextField()
    amount = models.DecimalField(max_digits=7, decimal_places=2)
    operation = models.CharField(max_length=8,
                                 choices=OPERATION_CHOICES,
                                 default="EXPENSES")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']


class Category(models.Model):
    title = models.CharField(max_length=255)
    operation = models.CharField(max_length=8,
                                 choices=OPERATION_CHOICES,
                                 default="EXPENSES")
